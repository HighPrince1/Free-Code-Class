import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
