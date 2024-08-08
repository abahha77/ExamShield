import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image from "../../images/shield.png";
import axios from "axios"

export default function Navbar() {


  return (

  
    <>
      <nav className="navbar navbar-expand-lg navbar-light back form-control sticky-top">
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto ms-4 navbar-nav-scroll">

          <li className="nav-item d-flex justify-content-center align-items-center">
              <Link to="about"><img src={image} alt="logo" className="imagewidth"></img></Link>
              <Link to="about"><h4 className="ps-2 text-white hov">Exam Shield</h4></Link>
          </li>

          </ul>

          <ul className="navbar-nav ms-auto">

          <li className="nav-item mt-2">
              <Link to="About" className="navbar-brand text-light mt-5 pt-5 hov">
                About
              </Link>
            </li>

            <li className="nav-item">
                  <Link to="logIn" className="navbar-brand text-light btn btn-outline-primary">
                    Log In
                  </Link>
            </li>

            <li className="nav-item">
              <Link to="Register" className="navbar-brand text-light btn btn-outline-primary" >
                Register
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}
