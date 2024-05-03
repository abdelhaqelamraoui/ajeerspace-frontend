import React from "react";
import { SigninPage } from "./pages/signin";

import './assets/css/global.css';
import './assets/css/app.css';
import { HomePage } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServicesPage } from "./pages/services";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage/>} />
               <Route path="/home" element={<HomePage/>} />
               <Route path="/signup" element={<SigninPage/>} />
               <Route path="/services" element={<ServicesPage/>} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
