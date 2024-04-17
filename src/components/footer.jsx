import React from "react";

import "../assets/css/footer.css";
import upIcon from "../assets/icons/up.png";
import logo from "../assets/icons/ajeerspace-logo-lighter.png";

export const Footer = (props) => {
   return (
      <footer>
         <div className="footer">
            <div>
               <a href="/" className="logo">
                  <img src={logo} alt="ajeerspace logo" className="logo" />
                  <span>Ajeerspace</span>
               </a>
            </div>
            
            <div className="nav-links">
               <div>
                  <ul>
                     <li>
                        <a href="#">Services</a>
                     </li>
                     <li>
                        <a href="#">Contact Up</a>
                     </li>
                     <li>
                        <a href="#">About Us</a>
                     </li>
                  </ul>
               </div>
               <div className="up-div">
                  <a href="#">
                     <img src={upIcon} alt="go up" className="up-icon"/>
                  </a>
               </div>
            </div>
         </div>
         <div className="copyright">
            © 2024 Ajeerspace. All rights reserved.
         </div>
      </footer>
   );
};
