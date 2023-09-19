import React from "react";
import Landing from "./Landing";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#d6440a" }}>
        {" "}
      </div>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/RegistrationForm" component={RegistrationForm} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
