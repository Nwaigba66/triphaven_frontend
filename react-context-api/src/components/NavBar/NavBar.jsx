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

    const handleSignup = () => {
        setIsSignedUp(true);
        console.log(`isSignedUp: ${isSignedUp}`);
    }

    return (
        <div className="navbar-container">
            <Link to="/">
                <div>
                    {/* <img src="{}" alt="Logo"/> */}
                </div>
            </Link>
            <nav>
                <ul>
                    <button className={activeTab === "Signup" ? "active" : ""} onClick={()=> handleTabClick("Signup")}>
                        <Link to="/home">Home</Link>
                    </button>
                    <button className={activeTab === "about" ? "active" : ""}  onClick={()=> handleTabClick("about")}>
                        <Link to="/about">About</Link>
                    </button>

                    {!isLoggedIn ? (
                        <>
                            <button Link to="/Login" className="login-button" onClick={handleLogin}>
                                Login
                            </button>
                            <button Link to="/" className="signup-button" onClick={handleSignup}>
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
