import { createContext, useContext, useState , useEffect} from "react";

import {auth, provider} from "../firebase"

export const AuthContext = createContext()

export const useAuth = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{

  const [room, setRoom] = useState("")
const [user, setUser] = useState()
  
    const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(true)
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email,password){
      return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
      return auth.signOut()
    }

    function loginWithGoogle(){
      return auth.signInWithPopup(provider).then((res)=>(
        setUser(res.displayName)
      )).catch((error)=> alert("not working"))
    }
 
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(user =>{
     
    console.log("User info :=> " ,user )
    setCurrentUser(user)
    setLoading(false)    
     
    })
    return unsubscribe
  },[])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
   room,
   setRoom,
    user,
    setUser
  }
   return (<AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>)
}