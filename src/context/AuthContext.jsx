import {createContext, useState, useContext, useEffect } from  "react";
import { GoogleAuthProvider,onAuthStateChanged,signInWithRedirect} from "firebase/auth";
import {auth} from "../firebase";

// create context 
const AuthContext = createContext();
//provider Context  
export const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);


// login by google  
const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider );
}
    const value = {
        currentUser,
        setCurrentUser,
        loginWithGoogle
    }

 //set currentUser 
 useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
        setCurrentUser(user);
    });
    return unsubscribe;
 }, []);

    return(<AuthContext.Provider value = {value}>
    {children}
    </AuthContext.Provider>
    )
} 
export const UserAuth = () => { 
    return useContext(AuthContext);
}
