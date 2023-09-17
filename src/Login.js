// src/Login.js
import React, { useState } from "react";

function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can handle the login logic with the email and password.
    // For this example, we'll simply log them.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="Login">
      <button className="Login-button" onClick={toggleLogin}>
        {isLoginVisible ? "Login" : "Logout"}
      </button>
      {isLoginVisible && (
        <div className="Login-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
