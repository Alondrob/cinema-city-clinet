import React, {useState, useContext, useEffect} from 'react'
import MovieCard from '../utils/MovieCard';
import { UserContext } from '../users/UserProvider';
 import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styling/Data.css'
import { Card, Row, Container, Col } from 'react-bootstrap';
import Rating from '../utils/Rating';

const  FavoriteMovie = () => {
    const { user } = useContext(UserContext);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const getFavorites = () => {
        let obj = { method: 'get', headers: { accept: "application/json", "content-type": "application/json", "Authorization": `Bearer ${user.token}` } };
        let url = `${process.env.REACT_APP_DOMAIN}/favorite_movies`;

        fetch(url, obj)
        .then(res => res.json())
        .then(favoriteMovies => setFavoriteMovies(favoriteMovies))
    }

    useEffect(() => {
        getFavorites();
    }, [favoriteMovies])


    return (
        <div>
            <Row>
                {favoriteMovies.map(movieData => 
                <Col lg={3}>
                           
                        <MovieCard movieData={movieData} >
                        </MovieCard>
                    </Col>)}
               
            </Row>
           
        </div>
    )
}

export default FavoriteMovie
