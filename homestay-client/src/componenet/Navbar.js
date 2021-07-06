import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-light text-light bg-light">
        <NavLink exact to="/" class="nav-link">
          Logo
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink exact to="/" class="nav-link">
                Home
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink exact to="/search" class="nav-link">
                Search
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/itenary" class="nav-link">
                Itenary
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/bookmark" class="nav-link">
                Bookmarks
              </NavLink>
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
                <NavLink exact to="/homestaysignin" class="nav-link dropdownpr">
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
      </nav>
    </div>
  );
}

export default Navbar;
