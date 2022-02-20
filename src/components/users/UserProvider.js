import React, {useState, createContext} from 'react';


export const UserContext = createContext();

export const  UserProvider = ({children}) => {
    
        const [user, setUser] = useState({email: "", token: "", auth: false})
    
        const login = (email, token) => {
            localStorage.setItem("token", token )
            localStorage.setItem("email", email )
            
            setUser({email: email, token: token, auth: true})
        }

        const logout = () => {
            setUser({ email: " ", token: " ", auth: false })
        }

        const checkLogin = () => {
            if (user.auth === false && localStorage.getItem(["token"]) && localStorage.getItem(["email"])) {
                setUser({ email: localStorage.getItem(["email"]), token: localStorage.getItem(["token"]), auth: true})
            }
                
         
        }

        const getToken = () => {
            localStorage.getItem("token")
        }


    return (
       <UserContext.Provider value={{user, login, logout, checkLogin, getToken}}>

            {children}

       </UserContext.Provider>
    )
}

