import React from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/error.css";

import logo from "../assets/icons/ajeerspace-logo.png";

export const ErrorPage = (props) => {
   return (
      <div className="error">
         <Navbar />
         <div className="main">404 | Page not found</div>
         <Footer />
      </div>
   );
};
