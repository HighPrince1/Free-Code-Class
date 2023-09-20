import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can handle the login logic with the email and password.
    // For this example, we'll simply log them.
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to the Home component
    history.push("/");
  };

  return (
    <div className="Login">
      <h2 className="Login-h2">Welcome to our Portal! Login to your account</h2>
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
          <button className="submit-button" type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
