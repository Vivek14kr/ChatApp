import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
export const Home = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }
  return (
    <div className="appp">
      <div className="app__body">
     <Sidebar/>
      
      </div>
      {/* <h1>Hello : {currentUser.email}</h1>
        <button onClick={handleLogout}>Logout</button>
        <div id="newhomee">
            <h1>Hello yadadjfdifjdifdofdfjdfid jfi</h1>
        </div> */}
    </div>
  );
};
