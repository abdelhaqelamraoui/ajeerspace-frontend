import React from "react";
import { Footer } from "../components/footer";

import "../assets/css/error.css";

import logo from "../assets/icons/ajeerspace-logo.png";

export const ErrorPage = (props) => {
   return (
      <div className="error">
         <div className="main">404 | Page not found</div>
         <div className="fixed-footer">
            <Footer />
         </div>
      </div>
   );
};
