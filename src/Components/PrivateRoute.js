import { Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"

export const PrivateRoute = ({children}) =>{
    const {currentUser} = useAuth()
   
console.log(currentUser, " this is user")
       if (currentUser){
return children
       }
   return <Navigate to={"/login"} />;
}