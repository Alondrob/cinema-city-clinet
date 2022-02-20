import React, {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { UserContext } from '../users/UserProvider'

const Menu = () => {
    const {user} = useContext(UserContext);

    return (
        <div>
            <Link to="/">Home Page</Link>&nbsp;
            <Link to="/moviefinder"> Find A Movie </Link>&nbsp;
            {!user.auth && <Link to="/sign-up"> Sign Up </Link>}&nbsp;
            {!user.auth && <Link to="/Login"> Login </Link>}&nbsp;
            <Link to="/favorite-movies"> Favorite Movies </Link>&nbsp;

            <p>
                {user.auth ? ` Hello ${user.email}` : "you're logged out"}
            </p>
           
        </div>
    )
}

export default Menu
