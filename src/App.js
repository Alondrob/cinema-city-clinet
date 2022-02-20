
import './App.css';
import styled from 'styled-components'
import HomePage from './components/general/HomePage'
import Menu from './components/general/Menu';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink} from 'react-router-dom';
import React,  {useContext} from 'react';
import Data from './components/movies/Data'
import Cast from './components/movies/Cast'
import SignUp from './components/users/SignUp';
import Login from './components/users/Login';
import { UserContext } from './components/users/UserProvider';
import FavoriteMovie from './components/movies/FavoriteMovie';






const App = () => {
  const { checkLogin } = useContext(UserContext);
  checkLogin();

  return (
   <React.Fragment >
    <div className='app-color'>
            <Router>
              <Menu />
         


              <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/moviefinder" element={<Data />} />
                <Route path="/movie/:id/cast" element={<Cast />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/favorite-movies" element={<FavoriteMovie />} />
              </Routes>
            </Router>
    </div>
   

     </React.Fragment>
  
      
     
     
      
    

  )
}

export default App;
