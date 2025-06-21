import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const success = register(username, password);
    if (success) {
      navigate("/login");
    } else {
      alert("User already exists");
    }
  };

  return (
     <div className="login-Container"> 
       <form onSubmit={handleRegister}>
         <div className="input-Fields">
           <h2>Register</h2>
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
               <button  className="login-Btn" type="submit">Register</button>
      
               <p>Already have an account? <Link to="/login">Login</Link></p>
           </div>
      </form>
    </div>
  );
};

export default Register;
