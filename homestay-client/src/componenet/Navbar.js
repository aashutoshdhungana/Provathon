import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light text-light bg-light">
        <Link className="navbar-brand" to="/">
          StayHere
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact to="/search" activeStyle={{ color: "green" }}>
                Search
              </NavLink>
            </li>
            {/**
            <li className="nav-item">
              <NavLink exact to="/itenary" activeStyle={{ color: "green" }}>
                Itenary
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink exact to="/bookmarks" activeStyle={{ color: "green" }}>
                Bookmark
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                exact
                to="/signin"
                activeStyle={{ color: "green" }}
                className="dropdown"
              >
                Log in
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/user/register"
                className="dropdown-toggle "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Register
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user/register">
                  User
                </Link>
                <Link className="dropdown-item" to="/homestay/register">
                  Homestay
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
