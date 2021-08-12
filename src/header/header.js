import React from "react";
import "./header.css";
import logo from "../logoimage/Corona Logo.png";
import Symptoms from "../coronasymptions/coronasymptions";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import IndCovid from "../coronatracker/indcovid";
import Total from "../coronatracker/covid";

const Header = () => {
  return (
    <Router>
      <div className='header1 fluid-container'>
        <img
          src={logo}
          alt='corona-logo'
          className='image'
          width='50px'
          height='50px'
        />
        {/* <Route path='/' component={App} /> */}

        <a href='#' className='home'>
          Home
        </a>
        <a href='#' className='status'>
          StatusWise Status
        </a>
        <a href='../' className='symptoms'>
          Symptoms
        </a>
        <a href='#' className='IndiaReport'>
          India Report
        </a>
      </div>
    </Router>
  );
};

export default Header;
