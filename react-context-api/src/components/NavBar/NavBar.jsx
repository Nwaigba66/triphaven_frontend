import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 

export const NavBar = () => {
    const [activeTab, setActiveTab] = useState("Signup");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleTabClick = (Signup) => {
        setActiveTab(Signup);
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
        console.log(`isLoggedIn: ${isLoggedIn}`);
    }

    // const handleChange = () => {
    //     setIsSignedUp(true);
    //     console.log(`isSignedUp: ${isSignedUp}`);
    // }
    const handleSubmit = () => {
        setIsSignedUp(true);
        console.log(`isSignedUp: ${isSignedUp}`);
    }

    return (
        <div className="nav-container">
            <Link to="/">
              
            </Link>
            <nav>
                <ul>
                 
                    <li className={activeTab === "home" ? "active" : ""} 
                    onClick={()=> handleTabClick("home")}
                    >   
                    <Link to="/home">Home </Link> 
                    </li>

                    <li className={activeTab === "about" ? "active" : ""}  onClick={()=> handleTabClick("about")}>
                    <Link to="/about">About </Link> 
                    </li>
                   

                   
                    <button className={activeTab === "Signup" ? "active" : ""} Link to="/Signup" onClick={()=> handleTabClick("Signup")}>Signup
        
                    </button>
                  
                
                    <button className={activeTab === "Login" ? "active" : ""} Link to="/Login"  onClick={()=> handleTabClick("login")}>Login
                       
                    </button>
                
                    {isLoggedIn ? (
                        <>
                            <button  className="login-button" Link to="/Login" onClick={handleLogin}>
                                Login
                            </button>
                            <button  className="signup-button" Link to="/Signup" onClick={handleSubmit}>
                                Sign Up
                            </button>
        
                        </>
                    ) : (
                        <li>
                            {/* <img src={} alt="profile-logo"/> */}
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
