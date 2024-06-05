import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import Home from './Home';
import Login from './components/Login';
import { BrowserRouter, Route } from "react-router-dom";
import Register from './components/Register';
import React ,{ Component } from "react";
import {
    BrowserRouter as Router,
    Routes,

    Link,
} from "react-router-dom";



function App() {
 

  return (
    
    <Router>
    <div  >
        {/* <ul className="App-header">
            <li>
                <Link to="">Home</Link>
            </li>
            <li>
                <Link to="/login">
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact Us
                </Link>
            </li>
        </ul> */}
        <Routes>
            <Route
                path="/"
                element={<Home />}
            ></Route>
                <Route
                path="login"
                element={<Login />}
            ></Route>
            <Route
                path="register"
                element={<Register />}
            ></Route>
             
        </Routes>
    </div>
</Router>
  
  );
}

export default App;
