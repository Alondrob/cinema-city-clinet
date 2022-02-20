import React, {useEffect, useState} from 'react';
import {Card, Row, Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styling/Data.css'
import SearchBar from '../general/SearchBar';
import '../../styling/Data.css'
import {Srollbars} from 'react-custom-scrollbars'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import FavoriteMovie from './FavoriteMovie';
import MovieCard from '../utils/MovieCard';


const Data = () => {
    const [movies, setMovies] = useState([]);
    const [input, setInput] =useState('');
   

    const movieRequest = async () => {
        const url = `http://localhost:3000/movies`
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovies(responseJson);
    }

    useEffect(() => {
        movieRequest();
       
    }, []);


    const handleChange = (event) => {
        let val = event.target.value;
        setInput(val);
    }

    const movieTitles = movies.map((movie) => {
        return movie.title.toLowerCase();
    })

    const filteredMovies = movies.filter(word => word.title.toLowerCase().includes(input.toLocaleLowerCase()))
       console.log(filteredMovies)
        

console.log(movies)

    return (
        <>
      
                <SearchBar handleChange={handleChange} /><br></br>
              
                {input != '' && <Container className='container' >
                    <Row>{filteredMovies.map((value) =>
                        <Col lg={3}>
                            <MovieCard movieData={value}/>
                        </Col>)}

                    <div className='scroll-bar'>
                        scroll
                    </div>
                        
                    </Row >
                        
                </Container>}
                      
            </>


        )
};
        
     
        
        

export default Data;
