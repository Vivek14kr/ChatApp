

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
export const Home = () => {
  
  const { logout } = useAuth();
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
