import React, { useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/signin.css";

import bgImg from "../assets/img/bg-img.png";
import bgImgV from "../assets/img/bg-img-v.png";

import lineImg from "../assets/img/line1.png";
import programmerImg from "../assets/img/programmer.png";

import { useCookies } from "react-cookie";
import { api } from "../api";
import swal from "sweetalert";

export const SigninPage = (props) => {
   const [cookies, setCookie] = useCookies(["access_token", "user_id"]);

   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const signin = (event) => {
      event.preventDefault();
      api.post("/login", user)
         .then((res) => {
            const accessToken = res.data.accessToken;
            const userId = res.data.userId;
            console.log(accessToken);
            setCookie("access_token", accessToken);
            setCookie("user_id", accessToken);
            window.location.href = "/profil";
         })
         .catch((err) => {
            swal(
               "Échec de la connexion",
               "Veuillez vérifier votre nom d'utilisateur et votre mot de passe, puis réessayez.",
               "error"
            );
         });
   };

   return (
      <div className="signin">
         <main className="main">
            <div className="bg">
               <img src={bgImg} alt="image" id="img-1" className="bg-img" />
               <img src={bgImg} alt="image" id="img-2" className="bg-img" />
               <img src={bgImg} alt="image" id="img-3" className="bg-img" />
               <img src={bgImg} alt="image" id="img-4" className="bg-img" />
               <img src={bgImgV} alt="image" id="img-5" className="bg-img" />
               <img src={lineImg} alt="image" id="line" />
            </div>

            <div className="content">
               <div>
                  <form action="" method="post" onSubmit={signin}>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        placeholder="Email"
                        min={8}
                        onChange={(e) =>
                           setUser({ ...user, email: e.target.value })
                        }
                     />
                     <input
                        type="password"
                        name="password"
                        id="password"
                        className="input"
                        placeholder="Password"
                        min={8}
                        onChange={(e) =>
                           setUser({ ...user, password: e.target.value })
                        }
                     />
                     <button type="submit" className="btn">
                        Se Connecter
                     </button>
                  </form>
                  <div>
                     <a href="/register" className="link link-secondary">
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
      </div>
   );
};
