import React from "react";
import { Footer } from "../components/footer";

import "../assets/css/home.css";

import logo from "../assets/icons/ajeerspace-logo.png";

export const ContactUsPage = (props) => {
   return (
      <div className="contactus">
         <div className="main">Contact us</div>
         <div className="fixed-footer">
            <Footer />
         </div>
      </div>
   );
};
