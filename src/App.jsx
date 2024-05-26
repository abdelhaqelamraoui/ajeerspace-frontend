import React from "react";
import { SigninPage } from "./pages/signin";

import "./assets/css/global.css";
import "./assets/css/app.css";
import { HomePage } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesPage } from "./pages/services";
import { OffresPage } from "./pages/offres";
import { RegisterPage } from "./pages/register";
import { ErrorPage } from "./pages/error";
import { ProfilPage } from "./pages/profil";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/home" element={<HomePage />} />
               <Route path="/signin" element={<SigninPage />} />
               <Route path="/profil" element={<ProfilPage />} />
               <Route path="/services" element={<ServicesPage />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/offres" element={<OffresPage />} />
               <Route path="/*" element={<ErrorPage />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
