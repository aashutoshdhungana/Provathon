import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../common/Footer";
import Home from "../Dashboard/Home";
import Search from "../Main/Search";
import Bookmark from "../Bookmarks";
import HomestayProfile from "../Homestay/homestayProfile";
import { Login, HomestayRegister, UserRegister } from "../Forms";

import ApiComponent from "../../api-docs/ApiComponent";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/signin" component={Login} />
        <Route path="/bookmarks" component={Bookmark} />
        <Route path="/homestay/register" component={HomestayRegister} />
        <Route path="/homestay/:id" component={HomestayProfile} />
        <Route path="/user/register" component={UserRegister} />
        <Route path="/api-docs" component={ApiComponent} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Routers;
