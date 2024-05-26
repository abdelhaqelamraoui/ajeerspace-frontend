import React from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/home.css";

import logo from "../assets/icons/ajeerspace-logo.png";

export const AboutUsPage = (props) => {
   return (
      <div>
         <Navbar />
         <div className="main">About US page</div>
         <Footer />
      </div>
   );
};
