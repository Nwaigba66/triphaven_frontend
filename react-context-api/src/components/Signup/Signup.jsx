import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/index.js";





export const Signup = () => {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    //this variable is for the dynamic connection to the server
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    console.log("testing my .env", `$/{API_URL}/auth/signup`);
    const nav = useNavigate();


    
     //this is the onSubmit function

    const handleSignup = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        const image = event.target.image.files[0];
        formData.append("title", title);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("userName", userName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("imageUrl", image);

        const newUser = {title, firstName, lastName, userName, email, password }

        //Reset the form
        setTitle("");
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPassword("");
        

        // const userToCreate = { userName, email, password };
        try {
            const response = await axios.post(`$/{API_URL}/auth/signup`,
             formData, newUser);
            console.log("You created a user", response.data);
            
            //this code allows new users navigate to the login page after creating a user account
            nav("/login");

        } catch(err) {
            console.log("you've experienced an error signing up", err);
            setError(err.response.data.errorMessage);
        }   
    };


    return (
        <>
        <div className="sign-container">
          <h2 className="signup-title">Signup Here</h2>
          <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Title:</label>
              <select 
                id="title" 
                value={title} 
                onChange={(event) => setTitle(event.target.value)} 
                required
              >   
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
              </select>
              </div>
              <div className="form-group">
                <label>
                FirstName:
                </label>
                <input 
                type="text" 
                value={firstName} placeholder="FirstName" onChange={(event) => setFirstName(event.target.value)}
                />   
            
            </div>
            <div className="form-group">
                <label>
                LastName:
                </label>
                <input type="text" placeholder="LastName" value={lastName} onChange={(event) => setLastName(event.target.value)}
                />
            
            </div>
            <div className="form-group">
                <label>
                UserName:
                </label>
                <input type="text" placeholder="UserName" value={userName} onChange={(event) => setUserName(event.target.value)}
                />
            
            </div>
            <div className="form-group">
                <label>
                Email:
                </label>
                <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}
                />
            
            </div>
            <div className="form-group">
                <label>
                Password:
                </label>
                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}
                />
            
            </div>
            <div className="form-group">
                <label>
                ProfileImage:
                </label>
            <input type="file" name="image" />
           
            </div>
            <div className="btn"> 
           <button>Sign Up</button>
           </div>
          </form>
          {error ? <h4 className="error-message">{error}</h4> : null}
        </div>
        </>
      )
    }