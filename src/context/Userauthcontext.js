import React, { useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    //provides us the current user
} from "firebase/auth";
import { auth } from "../firebase";
const Userauthcontext = React.createContext();

export function Userauthprovider({ children }) {
    const [user, setuser] = useState("");
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout(){
        return signOut(auth);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser);
        });
    });

    return (
        <Userauthcontext.Provider value={{user, signup, login, logout}}>{children}</Userauthcontext.Provider>
    );
}

//custom hook to use the context, it wraps the usecontext
export function useAuth() {
    return useContext(Userauthcontext);
}
