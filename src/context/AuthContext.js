import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userToken, setUserToken] = useState(null);

    const resetUser = () => {
        localStorage.removeItem('userToken');
        setUserToken(null)
    }

    const isLoggedIn = async () => {
        try {
            let userToken = localStorage.getItem('userToken');
            setUserToken(userToken);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      isLoggedIn()

    }, [])
    


    return (
        <AuthContext.Provider value={{userToken, isLoggedIn, resetUser}}>
            {children}
        </AuthContext.Provider>
    );
}