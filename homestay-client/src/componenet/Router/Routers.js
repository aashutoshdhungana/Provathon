import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "../Navbar";
import Search from "../Main/Search";
import Home from "../Dashboard/Home";
import Hslogin from "../Forms/Hslogin";
import Itenary from "../Main/Itenary";
import Bookmaks from "../Bookmarks";

function Routers() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact={true} path="/search" component={Search} />
        <Route exact={true} path="/itenary" component={Itenary} />
        <Route exact={true} path="/bookmarks" component={Bookmaks} />
        <Route exact={true} path="/homestaysignin" component={Hslogin} />
      </Switch>
    </Router>
  );
}
export default Routers;
