import React from "react";

import "./assets/css/global.css";
import "./assets/css/app.css";
import { HomePage } from "./pages/home";
import { SigninPage } from "./pages/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesPage } from "./pages/services";
import { OffresPage } from "./pages/offres";
import { RegisterPage } from "./pages/register";
import { ErrorPage } from "./pages/error";
import { ProfilPage } from "./pages/profil";
import { Navbar } from "./components/header";
import { AboutUsPage } from "./pages/aboutus";
import { ContactUsPage } from "./pages/contactus";
import { CreateOfferPage } from "./pages/create-offre";

function App() {
   return (
      <div className="App">
         <Navbar />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/home" element={<HomePage />} />
               <Route path="/signin" element={<SigninPage />} />
               <Route path="/profil" element={<ProfilPage />} />
               <Route path="/services" element={<ServicesPage />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/offres" element={<OffresPage />} />
               <Route path="/aboutus" element={<AboutUsPage />} />
               <Route path="/contactus" element={<ContactUsPage />} />
               <Route path="/create-offer" element={<CreateOfferPage />} />
               <Route path="/*" element={<ErrorPage />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
