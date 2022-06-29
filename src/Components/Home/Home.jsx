
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
export const Home = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
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
      <button onClick={handleLogout}>Logout</button>
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
      {/* <h1>Hello : {currentUser.email}</h1>
      
        <div id="newhomee">
            <h1>Hello yadadjfdifjdifdofdfjdfid jfi</h1>
        </div> */}
    </div>
  );
};
