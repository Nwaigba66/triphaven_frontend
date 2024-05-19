import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [activeTab, setActiveTab] = useState("Signup");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
        console.log(`isLoggedIn: ${isLoggedIn}`);
    }

    const handleSubmit = () => {
        setIsSignedUp(true);
        console.log(`isSignedUp: ${isSignedUp}`);
    }

    return (
        <div className="nav-container">
            <Link to="/">
                {/* Add your logo or home link here */}
            </Link>
            <nav>
                <ul>
                    <li className={activeTab === "home" ? "active" : ""} onClick={() => handleTabClick("home")}>
                        <Link to="/home">Home</Link>
                    </li>

                    <li className={activeTab === "about" ? "active" : ""} onClick={() => handleTabClick("about")}>
                        <Link to="/about">About</Link>
                    </li>

                    <li className={activeTab === "Signup" ? "active" : ""} onClick={() => handleTabClick("Signup")}>
                        <Link to="/Signup">Signup</Link>
                    </li>

                    <li className={activeTab === "Login" ? "active" : ""} onClick={() => handleTabClick("Login")}>
                        <Link to="/Login">Login</Link>
                    </li>

                    {isLoggedIn ? (
                        <>
                            <button className="login-button" onClick={handleLogin}>
                                Login
                            </button>
                            <button className="signup-button" onClick={handleSubmit}>
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
