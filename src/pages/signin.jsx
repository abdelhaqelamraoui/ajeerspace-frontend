import React from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/signin.css";

import bgImg from "../assets/img/bg-img.png";
import bgImgV from "../assets/img/bg-img-v.png";

import lineImg from "../assets/img/line1.png";
import programmerImg from "../assets/img/programmer.png";

export const SigninPage = (props) => {
   return (
      <div className="signin">
         <Navbar />
         <main className="main">
            <div className="bg">
               <img src={bgImg} alt="image" id="img-1" className="bg-img"/>
               <img src={bgImg} alt="image" id="img-2" className="bg-img"/>
               <img src={bgImg} alt="image" id="img-3" className="bg-img"/>
               <img src={bgImg} alt="image" id="img-4" className="bg-img"/>
               <img src={bgImgV} alt="image" id="img-5" className="bg-img"/>
               <img src={lineImg} alt="image" id="line"/>
            </div>

            <div className="content">
               <div>
                  <form action="" method="post">
                     <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        placeholder="Email"
                     />
                     <input
                        type="password"
                        name="password"
                        id="password"
                        className="input"
                        placeholder="Password"
                     />
                     <button type="submit" className="btn">
                        Se Connecter
                     </button>
                  </form>
                  <div >
                     <a href="#" className="link link-secondary">
                        Créer un compte
                     </a>
                     <a href="#" className="link link-accent">
                        Mot de passe oublié
                     </a>
                  </div>
               </div>
               <img src={programmerImg} alt="image" />
            </div>
         </main>
         <Footer />
      </div>
   );
};
