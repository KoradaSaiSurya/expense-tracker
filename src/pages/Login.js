import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-Container">
      <form onSubmit={handleLogin}>
        <div className="input-Fields">
        <h2>Login</h2>
         
           <input className="login-Input"
               placeholder="Username" 
               value={username} 
               onChange={(e) => setUsername(e.target.value)} /> 
                 <br />

           <input className="login-Input"
                placeholder="Password" 
                type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} />
                 <br />
          
               <button  className="login-Btn"  type="submit">Login</button>

               <p>Don't have account? <Link to="/register">Register</Link></p>
          </div>
       </form>
    </div>
  );
};

export default Login;
