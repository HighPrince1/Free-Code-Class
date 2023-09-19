import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" />
        </Switch>
        <Body />
        <Sidebar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
