import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import website_logo from '../../image/website-logo.jpg'

// React material Ui Button
import Button from '@material-ui/core/Button';

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
        <NavLink to="/">
         <img src={website_logo} className="website-logo"/>
        </NavLink>  
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            {/* <li className="glassy-button">
              <NavLink to="/">Home</NavLink>
            </li>
             */}
            
  
            <li >
              <NavLink to="/"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500"}}>Home</Button></NavLink>
            </li>
  
      
  
               
           
            {/* <li>
              <NavLink to="/about">about</NavLink>
            </li> */}
            <li className="">
              <NavLink to="/service"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500" }}>Services</Button></NavLink>
            
            </li>
            <li className="">
              <NavLink to="/login"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500"}}>LOGIN</Button></NavLink>
             
            </li>
             
            <li className="">
              <NavLink to="/about"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500"}}>ABOUT</Button></NavLink>
             
            </li>

          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.instagram.com/" target="avishkar">
                <img href="%PUBLIC_URL%/svg/instagram-svg.svg"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ES1XZ-N6w3A&ab_channel=NischayMalhan"
                target="_avishkar"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
   
        </div>
      </nav>



    </>
  );
};

export default Navbar;
