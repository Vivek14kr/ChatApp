
import './App.css';
import { Login } from './Components/Login/Login';
import {Routes, Route} from "react-router-dom"
import { SignUp } from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
