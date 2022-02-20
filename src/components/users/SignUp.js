import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from './UserProvider'


const SignUp = () => {
  

    const [userData, setUserData] = useState({ "email": "", "password": "", "password_confirmation": "" })
    const { login } = useContext(UserContext);

    const submitForm = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_DOMAIN}/users`, {
            method: 'post', 
            headers: {accept: "application/json", "content-type": "application/json"},
            body: JSON.stringify({user: userData}),
        })
        .then ((res) => res.json())
        .then((json) => {
            login(json.user.email, json.token)
        })
    }
    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                
                <label > Email </label>
                <input name="email" type="email" onChange={handleChange}/>
                <label> Password</label>
                <input name="password" type="password" onChange={handleChange}/>
                <label> Password Confirmation </label>
                <input name="password_confirmation" type="password" onChange={handleChange}/>
                <input type="submit"/>
                
            </form>
        </div>
    )
}

export default SignUp
