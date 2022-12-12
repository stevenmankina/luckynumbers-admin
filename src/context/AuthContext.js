import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userToken, setUserToken] = useState(null);

    const resetUser = () => {
        localStorage.removeItem('userToken');
        setUserToken(null);
    }

    const isLoggedIn = async () => {
        console.log('call');
        try {
            let userToken = localStorage.getItem('userToken');
            setUserToken(userToken);
            return true;
        } catch (error) {
            console.log(error);
            return false;
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