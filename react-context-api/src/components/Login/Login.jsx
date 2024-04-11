import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { authenticateUser } = useContext(AuthContext);
    const nav = useNavigate();

  
   
    //this is the onSubmit function
    const handleLogin = async (event) => {
      setIsLoggedIn(true);
      console.log(`isLoggedIn: ${isLoggedIn}`);
        event.preventDefault();

        const userLogin = { email, userName, password };
        try {
            const response = await axios.post("http://localhost:3000/auth/login", userLogin);
            console.log("You are logged in", response.data);

            //if you log in successfully then store the authToken from the server in local storage
            localStorage.setItem("authToken", response.data.authToken);

            //this code below will call the function set verify the token and set the user before going to the  home page.
            await authenticateUser();
            nav('/home'); 
        } catch (err) {
            console.log("Error occured while signing up", err);
            setError(err.response.data.errorMessage);
        }   
    }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <div className="form-group">
        <label>
          Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
       
        </div>
        <div className="form-group">
        <label>
          UserName:
          </label>
          
          <input
            type="userName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
       
        </div>
        <div className="form-group">
        <label>
          Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
       
        </div>
       
        <button link to="/home" className="login" onClick={handleLogin}>
          Login
          </button>
      </form>
      {error ? <h4 className="error-message">{error}</h4> : null}
    </div>
  )
}
