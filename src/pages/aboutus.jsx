import React from "react";
import { Footer } from "../components/footer";

import "../assets/css/home.css";

import logo from "../assets/icons/ajeerspace-logo.png";

export const AboutUsPage = (props) => {
   return (
      <div>
         <div className="main">About US page</div>
         <div className="fixed-footer">
            <Footer />
         </div>
      </div>
   );
};
