import React from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

function Landing() {
  return (
    <div className="Landing-text">
      <h1>WELCOME TO FREE CODE CLASS</h1>
      <p className="p1">your one stop tech solution...</p>
      <Welcome />
      <div>
        <p>Don't have an account yet?</p>
        <Link to="/RegistrationForm">SignUp</Link>
      </div>
    </div>
  );
}

export default Landing;
