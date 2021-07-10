import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Navbar from "../Navbar";
import Home from "../Dashboard/Home";
import Login from "../Forms/Login";
import Search from "../Main/Search";
import Register from "../Forms/Register";
import Bookmark from "../Bookmarks";
import Footer from "../common/Footer";
import HomestayProfile from "../Homestay/homestayProfile";
import HomestayRegister from "../Forms/Hsregister";

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
        <Route path="/user/register" component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Routers;
