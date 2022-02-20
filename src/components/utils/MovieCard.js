import React, { useEffect, useState, useContext } from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styling/Data.css'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { UserContext } from '../users/UserProvider';
import Rating from './Rating';


const MovieCard = ({movieData}) => {

    const { user } = useContext(UserContext);
    const [favoriteMovie, setFavoriteMovie] = useState(false)

    const addToFavorites = () => {
        let obj = { method: 'post', headers: { accept: "application/json", "content-type": "application/json", "Authorization":`Bearer ${user.token}` }, body: JSON.stringify({favorite_movie: {movie_id: movieData.id}}) };
        let url = `${process.env.REACT_APP_DOMAIN}/favorite_movies`;

        fetch(url, obj)
        
    }

    const handleClick = () => {
        addToFavorites();
        setFavoriteMovie(!favoriteMovie)

        console.log('hello')
    }

    return (
        <Card>

            <a href={`/movie/${movieData.id}/cast`} ><Card.Img src={movieData.image} />   </a>
            <br></br>
            {favoriteMovie ? <FcLike onClick={handleClick} /> : <FcLikePlaceholder className='faded-heart' onClick={handleClick} />  }
            
            
        </Card>
    )
}

export default MovieCard; 
 