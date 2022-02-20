import React, {useEffect, useState, useContext, useReducer} from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import {FaStar} from 'react-icons/fa'
import '../../styling/Rating.css'
import FavoriteMovie from '../movies/FavoriteMovie'
import { UserContext } from '../users/UserProvider'

const Rating = ({movieId}) => {
    const {getToken, user} = useContext(UserContext);
    console.log(getToken())
    const [stars, setStars] = useState(0);
    const [hover, setHover] = useState(null);
    const [ratings, setRatings] = useState([])

   
    
    const sendRating = () => {
        let object = {
                        method: 'POST', 
                        headers: {
                                    accept: "application/json", "content-type":"application/json",
                                    "Authorization":`Bearer ${user.token}`
                                 },
                        body:  JSON.stringify({movie_review: {
                                                                movie_id: movieId, 
                                                                stars: stars
                                                
                                                            }})
                        
                     };
            let url = `http://localhost:3000/reviews`;

            fetch(url, object)
            .then(res => res.json())
            .then(ratings => setRatings(ratings))
    }

    const getRating = () => {
        let obj = {
            headers: {
                accept: "application/json",
                "content-type":"application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }
        let url = `http://localhost:3000/reviews/${movieId}`;

        fetch(url, obj)
        .then(res => res.json())
        .then(review =>{
            setStars(review.stars)
        });
    }

    useEffect(() => {
        sendRating();
    }, [stars]);

    useEffect(() => {
        getRating();
    }, [])

    const clickHandler = (ratingValue) => {
        setStars(ratingValue)
        
    }

    console.log(stars)
    return (
        <div>
            
            {[...Array(10)].map((star, i) => { 
                const ratingValue = i + 1
                return(
                    <label>
                        <input 
                                className='rating-radio-button' 
                                type='radio' name='rating' 
                                value={ratingValue} 
                                onClick={() => clickHandler(ratingValue)}
                                
                        />
                        <FaStar key={i} 
                                size={40} 
                                color={ratingValue <= (hover || stars) ? 'rgb(230, 230, 15)' : 'rgba(52, 49, 49, 0.217)'}    
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}                      
                        />

                    </label>
                 
                )
                    
            })}
            
        </div> 
    )
}

export default Rating
