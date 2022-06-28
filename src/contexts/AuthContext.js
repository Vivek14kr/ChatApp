import { createContext, useContext, useState , useEffect} from "react";

import {auth} from "../firebase"

export const AuthContext = createContext()

export const useAuth = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserwithEmailAndPassword(email, password)
    }
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
    })
    return unsubscribe
  },[])

  const value = {
    currentUser,
    signup
  }
   return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}