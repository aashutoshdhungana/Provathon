import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import { Router } from 'react-router';
import { ImHome, ImUser, ImUserPlus, ImUsers } from "react-icons/im";

function Navbar()
{
    return(
        <div>
            <nav class="navbar navbar-expand-lg  navbar-light text-light bg-light">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                  <NavLink exact to='/' activeStyle={{color:'green'}} class="nav-link">Home</NavLink>
                  </li>
                 
                  <li class="nav-item">
                    <a class="nav-link" href="#">Search</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Itenary</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Bookmark</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Signin
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">User</a>
                      <NavLink exact to='/homestaysignin' activeStyle={{color:'green'}} class="nav-link dropdownpr">Homestay</NavLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Register
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">User</a>
                      <a class="dropdown-item" href="#">Homestay</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>




        </div>
        
    )
    
}

export default Navbar;
