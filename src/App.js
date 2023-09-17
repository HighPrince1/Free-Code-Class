import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sidebar />
      <Login />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
