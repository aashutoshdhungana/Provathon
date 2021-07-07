import React from "react";
import Navbar from "../Navbar";
import Home from "../Dashboard/Home";
import Login from "../Forms/Login";
import Search from "../Main/Search";
import Hsregister from "../Forms/Hsregister";
import Register from "../Forms/Register";
import Bookmark from "../Bookmarks";
import HomestayProfile from "../Homestay/homestayProfile";
import { Route, BrowserRouter } from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/homestay/:id" component={HomestayProfile} />
        <Route path="/search" component={Search} />
        <Route path="/signin" component={Login} />
        <Route path="/bookmarks" component={Bookmark} />
        <Route path="/homestay/register" component={Hsregister} />
        <Route path="/user/register" component={Register} />
      </switch>
    </BrowserRouter>
  );
}
export default Routers;
