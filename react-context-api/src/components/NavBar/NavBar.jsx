import React, { useState, useEffect } from "react";
import logo from "../../assets/House-logo.jpeg";


import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nav = useNavigate();
  const { user } = useContext(AuthContext);

  // console.log(user);

  const handleLogin = () => {
            setIsLoggedIn(true);
           console.log(`isLoggedIn: ${isLoggedIn}`);
           nav("/login");
     }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    nav("/");
  };

  return (
    <div className="nav-container">
         
            <img src={logo} alt="profile-logo" className="logo"/>
      
      <button onClick={() => nav("/home")}>Hotel</button>
      <button onClick={() => nav("/activity")}>Activities</button>
      <button onClick={() => nav("/privacy")}>Privacy</button>
      <button onClick={() => nav("/about")}>About Us</button>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../../assets/House-logo.jpeg";
// import { Signup } from '../Signup/Signup';
// import { Login } from '../Login/Login';

// export const NavBar = () => {
//     const [activeTab, setActiveTab] = useState("home");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isSignedUp, setIsSignedUp] = useState(false);

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     }

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//         console.log(`isLoggedIn: ${isLoggedIn}`);
//     }

//     const handleSubmit = () => {
//         setIsSignedUp(true);
//         console.log(`isSignedUp: ${isSignedUp}`);
//     }

//     return (
//         <div className="nav-container">

//             <nav>
//                 <ul>
//                     <>
//                         <li>
//                             <img src={logo} alt="profile-logo" width={80} height={80}/>
//                         </li>
                       
//                         <li className={activeTab === "home" ? "active" : ""} onClick={() => handleTabClick("home")}>
//                             <Link to="/home">Home</Link>
//                         </li>

//                         <li className={activeTab === "about" ? "active" : ""} onClick={() => handleTabClick("about")}>
//                             <Link to="/about">About</Link>
//                         </li>

    
//                        <Link to="/Login">
//                         <button className="login-button" onClick={handleLogin}>Login
//                         </button>
//                         </Link>
//                         <Link to="/Signup">
//                         <button className="signup-button" onClick={handleSubmit}>Sign Up
//                         </button>
//                         </Link>


//                         {/* {!isLoggedIn ? (
//                             <>
//                                 <button className="login-button" onClick={handleLogin}>
//                                     Login
//                                 </button>
//                                 <button className="signup-button" onClick={handleSubmit}>
//                                     Sign Up
//                                 </button>
//                             </>
//                         ) : (
//                             <li>
//                                 <img src={logo} alt="profile-logo" width={50} height={50}/>
//                             </li>
//                         )} */}
//                     </>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
