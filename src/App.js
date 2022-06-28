
import './App.css';
import { Login } from './Components/Login/Login';
import {Routes, Route} from "react-router-dom"
import { SignUp } from './Components/SignUp/SignUp';
import { Home } from './Components/Home/Home';
import {PrivateRoute} from "./Components/PrivateRoute"
function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       <Route path="/" element={
        <PrivateRoute>
       <Home/></PrivateRoute>}></Route>
        </Routes>
    </div>
  );
}

export default App;
