import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Landing from "./Landing";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Landing">
            <Landing />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/RegistrationForm">
            <RegistrationForm />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
