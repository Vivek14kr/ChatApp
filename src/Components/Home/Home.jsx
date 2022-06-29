import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useAuth} from "../../contexts/AuthContext"
export const Home = ()=>{
const [error, setError] = useState("")
const {currentUser, logout}= useAuth()
const navigate = useNavigate()
 async function handleLogout(){
setError("")
try{
 await logout()
 navigate("/login")

}catch{
    setError("Failed to Log Out")
}
    }
    return <div>
        <h1>Hello : {currentUser.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>

}