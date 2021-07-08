import React from "react";
import Navbar from "./Navbar";
import Home from "./Dashboard/Home";
import Login from "./Forms/Login";
import HomestayProfile from "./Homestay/homestayProfile";
import { Route, BrowserRouter } from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/homestay/:id" component={HomestayProfile} />
        <Route path="/homestaysignin" component={Login} />
      </switch>
    </BrowserRouter>
  );
}
export default Routers;
