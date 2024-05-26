import React from "react";

import logo from "../assets/icons/ajeerspace-logo.png";
import "../assets/css/header.css";
import loginIcon from "../assets/icons/login.png";
export const Navbar = (props) => {
   return (
      <header className="header">
         <a href="/" className="logo">
            <img src={logo} alt="ajeerspace logo" className="logo" />
            <span>Ajeerspace</span>
         </a>

         <nav>
            <ul>
               <li>
                  <a href="/home" className="link">
                     Acceuil
                  </a>
               </li>
               <li>
                  <a href="/services" className="link">
                     Services
                  </a>
               </li>
               <li>
                  <a href="/aboutus" className="link">
                     About Us
                  </a>
               </li>
               <li>
                  <a href="/register" className="link">
                     <button className="btn login-button">
                        <span>Login</span>
                        <img src={loginIcon} alt="" />
                     </button>
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
};
