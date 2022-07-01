

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";

import "./Home.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
export const Home = () => {
  
    const { currentUser } = useContext(AuthContext);

  const { logout, room } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
   
    try {
      await logout();
      navigate("/login");
    } catch {
      
    }
  }
  return (
    <div className="appp">
      <div className="app__body">
        <Sidebar currentUser={currentUser} />

        {room ? <Chat /> : null}

        <button id="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* 
      
        <div id="newhomee">
            <h1>Hello yadadjfdifjdifdofdfjdfid jfi</h1>
        </div> */}
    </div>
  );
};
