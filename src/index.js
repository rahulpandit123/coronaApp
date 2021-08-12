import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Link,
  NavLink,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import IndCovid from "../src/coronatracker/indcovid";
import Total from "../src/coronatracker/covid";
import Symptoms from "../src/coronasymptions/coronasymptions";
import Home from "../src/home/home";
import Notfound from "./notfound";
import logo from "../src/logoimage/Corona Logo.png";

ReactDOM.render(
  <Router>
    <div className='header1 fluid-container'>
      <img
        src={logo}
        alt='corona-logo'
        className='image'
        width='50px'
        height='50px'
      />
      <ul className='head'>
        <li className='page'>
          <NavLink
            to='/home'
            exact
            activeStyle={{ color: "green" }}
            className='home'>
            Home{" "}
          </NavLink>
        </li>

        <li className='page'>
          <NavLink
            to='/covid'
            exact
            activeStyle={{ color: "red" }}
            className='status'>
            Total covid patients{" "}
          </NavLink>
        </li>
        <li className='page'>
          <NavLink
            to='/indcovid'
            exact
            activeStyle={{ color: "Blue" }}
            className='IndiaReport'>
            India Statewise corona status
          </NavLink>
        </li>
        <li className='page'>
          <NavLink
            to='/sympotoms'
            exact
            activeStyle={{ color: "green" }}
            className='symptoms'>
            Corona Symptoms{" "}
          </NavLink>
        </li>
      </ul>
    </div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/covid' component={Total} />
      <Route path='/indcovid' component={IndCovid} />
      <Route path='/sympotoms' component={Symptoms} />
      <Route component={Notfound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
