import { Card, Button, Form, Alert } from "react-bootstrap";
import { useRef, useState } from "react";
// import { Container } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";
import {provider} from "../../firebase"
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef();
  const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  const { login, loginWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

async function handleGoogle(){
   
        try {
          setError("");
          setLoading(true);
          await loginWithGoogle(provider);
          navigate("/");
        } catch {
          setError("Failed to Sign In");
        }
        setLoading(false);
}


  async function handleSubmit(e) {
    e.preventDefault();
    

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    navigate("/")
    } catch {
      setError("Failed to Sign In");
    }
    setLoading(false);
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
              <h2 className="text-center mb-4">Login In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button disabled={loading} className="w-100" type="submit">
                  Login In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account?
            <Link to="/signup">Sign Up</Link>


            <div>
              <h3>OR</h3>
              <p>For better experience</p>
            </div>
            <Button id="googlebtn" className="w-100" onClick={()=>{
            handleGoogle()
                
            }}>
              Sign In with Google
            </Button>
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
};
