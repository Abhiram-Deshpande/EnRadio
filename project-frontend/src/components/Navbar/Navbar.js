import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import website_logo from '../../image/website-logo.jpg'
import button_style from './ButtonStyles.css'
import image from '../../image/website-logo.jpg'

// React material Ui Button
import Button from '@material-ui/core/Button';

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const linkButtonStyle=
  {
    fontSize: '18px',
    color:"black",
    fontWeight:"500",
    padding:"12px"
}
  return (
    <>
      <nav className="main-nav">
        <div className="logo-container">
        <NavLink to="/">
          <img className="website-logo" src={image} alt="Something went wrong"/>
        </NavLink>  
        </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li >
              <NavLink to="/"><Button variant="primary" size="large" style={linkButtonStyle}>Home</Button></NavLink>
            </li> 
            
            <li className="">
              <NavLink to="/service">
                <Button variant="primary" size="large" style={linkButtonStyle}>
                  Services
                </Button>
              </NavLink>
            </li>

            <li className="">
              <NavLink to="/try-it-out">
                <Button variant="primary" size="large" style={linkButtonStyle}>
                  Try it Out
                </Button>
              </NavLink>
            </li>
             
            <li className="">
              <NavLink to="/about">
                <Button variant="primary" size="large" style={linkButtonStyle}>
                  ABOUT
                </Button>
              </NavLink>
            </li>
          </ul>

        </div>
        <div class="loginButton-container">
        <button style={button_style.loginButton} id="loginButton" >
          <NavLink to="/login"></NavLink>
          Login
        </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
