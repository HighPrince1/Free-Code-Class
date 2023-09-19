import React from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

function Body() {
  return (
    <div className="Body-text">
      <h1>WELCOME TO FREE CODE CLASS</h1>
      <p className="p1">your one stop tech solution</p>
      <Welcome />
      <p>Don't have an account yet?</p>
      <Link to="/RegistrationForm">Sign up</Link>
    </div>
  );
}

export default Body;
