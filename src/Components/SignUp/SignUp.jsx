import {Card, Button, Form, Alert} from "react-bootstrap"
import {useRef, useState} from "react";

import {useAuth} from "../../contexts/AuthContext"
import {Link, useNavigate} from "react-router-dom"
import "./SignUp.css"

export const SignUp = ()=>{

const navigate= useNavigate()

const UserNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
 const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
console.log(
  passwordRef,
  emailRef,
  " new way ",
  passwordRef.current.value === passwordConfirmRef.current.value
);
    if (passwordRef.current.value !==
       passwordConfirmRef.current.value){
      return setError("Passwords do not match")
    }

    try{ 
      setError("")
      setLoading(true)
    
      await
signup(emailRef.current.value, 
      passwordRef.current.value)
      navigate("/")
    }
    catch{
      setError("Failed to create an account")
    }
    setLoading(false)
    
  }
   return (
     <>
       <div
         id="secondbox"
         className="d-flex align-items-center justify-content-center newcolor"
         style={{ minHeight: "100vh" }}
       >
         <div id="cardd" className="w-100" style={{ maxWidth: "400px" }}>
           <Card>
             <Card.Body>
               <h2 className="text-center mb-4">Sign Up</h2>
               {error && <Alert variant="danger">{error}</Alert>}
               <Form onSubmit={handleSubmit}>
                 <Form.Group id="userrname">
                   <Form.Label>Username</Form.Label>
                   <Form.Control type="text" ref={UserNameRef} required />
                 </Form.Group>
                 <Form.Group id="email">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" ref={emailRef} required />
                 </Form.Group>
                 <Form.Group id="password">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" ref={passwordRef} required />
                 </Form.Group>
                 <Form.Group id="password-confirm">
                   <Form.Label>Password Confirmation</Form.Label>
                   <Form.Control
                     type="password"
                     ref={passwordConfirmRef}
                     required
                   />
                 </Form.Group>
                 <Button disabled={loading} className="w-100" type="submit">
                   Sign Up
                 </Button>
               </Form>
             </Card.Body>
           </Card>
           <div className="w-100 text-center mt-2">
             Already have an account? <Link to="/login">Login In</Link>
           </div>
         </div>
       </div>
       <div id="firstbox">
         <img
           id="imgtitle"
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
           alt=""
         />
         <b id="title">WHATSAPP WEB</b>
       </div>

       <div id="thirdbox"></div>
     </>
   );
}