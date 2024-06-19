import React from "react";
import { Footer } from "../components/footer";

import "../assets/css/home.css";

import logo from "../assets/icons/ajeerspace-logo.png";

export const AboutUsPage = (props) => {
   return (
      <div className="aboutus">
         <div className="main">
            <div>About us here</div>
            <div>
               <img src={logo} alt="logo" />
            </div>
         </div>
         <div className="fixed-footer">
            <Footer />
         </div>
      </div>
   );
};
