import React, {useState, useContext } from 'react'
import { UserContext } from './UserProvider'

const Login = () => {
    
    const [userData, setUserData] = useState({"email": "", "password": ""});
    const {login, user} = useContext(UserContext);

 const handleChange = (event) => {
     setUserData({
         ...userData,
         [event.target.name]: event.target.value
     })
 }

 const submitForm = (e) => {
     e.preventDefault();
    
     fetch(`${process.env.REACT_APP_DOMAIN}/sessions`, {
        method: 'post',
        headers: {accept: "application/json", "content-type": "application/json"},
        body: JSON.stringify({user: userData})
    })
    .then((res) => res.json())
    .then((json) => {
     login(json.user.email, json.token)
     window.location = "/"
    })
 }
    return (
        <div>
            {!user.auth &&
                <form onSubmit={submitForm}>
                    <label> Email </label>
                    <input name="email" type="email" onChange={handleChange} />
                    <label> Password</label>
                    <input name="password" type="password" onChange={handleChange} />
                    <input type='submit' />


                </form>
            }
          
        </div>
    )
}

export default Login
