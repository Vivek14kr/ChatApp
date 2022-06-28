import {Route,Routes, Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"

export const PrivateRoute = ({children}) =>{
    const {currentUser} = useAuth()
   

       if (currentUser){
return <Navigate to={"/login"}/>
       }
    return children
}