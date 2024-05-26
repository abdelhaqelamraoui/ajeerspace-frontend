import React from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/offres.css";

export const ProfilPage = (props) => {
   return (
      <div className="profil">
         <Navbar />
         <main className="main">The profil page</main>
         <Footer />
      </div>
   );
};
