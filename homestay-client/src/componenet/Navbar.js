import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg  navbar-light text-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink
                exact
                to="/"
                activeStyle={{ color: "green" }}
                class="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Search
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Itenary
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Bookmark
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Signin
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  User
                </a>
                <NavLink
                  exact
                  to="/homestaysignin"
                  activeStyle={{ color: "green" }}
                  class="nav-link dropdownpr"
                >
                  Homestay
                </NavLink>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Register
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  User
                </a>
                <a class="dropdown-item" href="#">
                  Homestay
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav> */}

<nav class="navbar navbar-expand-lg  navbar-light text-light bg-light">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                  <NavLink exact to="/"  activeStyle={{color:'green'}} >Home</NavLink>
                  </li>
                 
                  <li class="nav-item">
                  <NavLink exact to="/search"    activeStyle={{color:'green'}}>Search</NavLink>
                  </li>
                  <li class="nav-item">
                  <NavLink exact to="/itenary"  activeStyle={{color:'green'}} >Itenary</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink exact to='/bookmarks'  activeStyle={{color:'green'}} >Bookmark</NavLink>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Signin
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" class="blue" activeStyle={{color:'green'}} href="#">User</a>
                      <NavLink exact to='/homestaysignin' activeStyle={{color:'green'}} class="dropdown">Homestay</NavLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Register
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" class="blue"  href="#">User</a>
                      <a class="dropdown-item" class="blue" href="#">Homestay</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
    </div>
  );
}

export default Navbar;
