import React from "react";
import Navbar from "./Navbar";
import Home from "./Dashboard/Home";
import Hslogin from "./Forms/Hslogin";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function Routers() {
  return (
    <Router>
        <Navbar />
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/homestaysignin" component={Hslogin} />
      </switch>
    </Router>
  );
}
export default Routers;
