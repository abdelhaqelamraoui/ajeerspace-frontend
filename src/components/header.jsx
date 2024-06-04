import React from "react";

import logo from "../assets/icons/ajeerspace-logo.png";
import "../assets/css/header.css";
import loginIcon from "../assets/icons/login.png";
import { useCookies } from "react-cookie";
export const Navbar = (props) => {
   const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);

   const handleClick = (event) => {
      // if (cookies.access_token) {
      // logout
      removeCookies("access_token");
      window.location.href = "/signin";
      // } else {
      //    window.location.href = "/register";
      // }
   };

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

               {cookies.access_token && (
                  <li>
                     <a href="/profil" className="link">
                        Mon Profil
                     </a>
                  </li>
               )}
               <li>
                  <a href="#" className="link">
                     <button className="btn login-button" onClick={handleClick}>
                        <span>{cookies.access_token ? "Logout" : "Login"}</span>
                        <img src={loginIcon} alt="" />
                     </button>
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
};
