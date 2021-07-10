import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg  navbar-light text-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeStyle={{ color: "green" }}
                className="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Itenary
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bookmark
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Signin
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  User
                </a>
                <NavLink
                  exact
                  to="/homestaysignin"
                  activeStyle={{ color: "green" }}
                  className="nav-link dropdownpr"
                >
                  Homestay
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Register
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  User
                </a>
                <a className="dropdown-item" href="#">
                  Homestay
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav> */}

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
}

export default Navbar;
