import React from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/register.css";

export const RegisterPage = (props) => {
   return (
      <div className="register">
         <Navbar />
         <main className="main">
            <h1 className="title">Créer votre compte</h1>
            <form action="">
               <div className="fields">
                  <div>
                     <label htmlFor="nom">Nom</label>
                     <input type="text" name="nom" id="nom" />
                  </div>
                  <div>
                     <label htmlFor="prenom">prenom</label>
                     <input type="text" name="prenom" id="prenom" />
                  </div>
                  <div>
                     <label htmlFor="adresse">adresse</label>
                     <input type="text" name="adresse" id="adresse" />
                  </div>
                  <div>
                     <label htmlFor="password">password</label>
                     <input type="text" name="password" id="password" />
                  </div>
                  <div>
                     <label htmlFor="confirm">confirm</label>
                     <input type="text" name="confirm" id="confirm" />
                  </div>
                  <div>
                     <label htmlFor="phone">phone</label>
                     <input type="text" name="phone" id="phone" />
                  </div>
               </div>
               <div className="action">
                  <button type="submit" className="btn">
                     Créer mon compte
                  </button>
               </div>
            </form>
         </main>
         <Footer />
      </div>
   );
};
