import React, { useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";
// import { useHistory } from "react-router-dom";
import swal from "sweetalert";

import "../assets/css/register.css";
import "../assets/css/sweetalert.css";
import { api } from "../api";

export const RegisterPage = (props) => {
   const [newUser, setNewUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      phone: "",
   });

   const register = (event) => {
      event.preventDefault();
      if (newUser.password != newUser.confirm) {
         window.alert("Not matching password");
      } else {
         api.post("/register", newUser)
            .then((res) => {
               //
               console.log(res);
               swal(
                  "Bien inscrit",
                  "Clickez OK pour s'authentifier",
                  "success"
               ).then((r) => {
                  //
                  window.location.href = "/signin";
               });
            })
            .catch((err) => {
               //
               console.log(err);
            });
      }
   };
   return (
      <div className="register">
         <Navbar />
         <main className="main">
            <h1 className="title">Créer votre compte</h1>
            <form action="" onSubmit={register}>
               <div className="fields">
                  <div>
                     <label htmlFor="nom">Nom</label>
                     <input
                        type="text"
                        name="nom"
                        id="nom"
                        onChange={(e) =>
                           setNewUser({ ...newUser, lastName: e.target.value })
                        }
                     />
                  </div>
                  <div>
                     <label htmlFor="prenom">Prénom</label>
                     <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        onChange={(e) =>
                           setNewUser({ ...newUser, firstName: e.target.value })
                        }
                     />
                  </div>
                  {/* <div>
                     <label htmlFor="adresse">Adresse</label>
                     <input
                        type="text"
                        name="adresse"
                        id="adresse"
                        onChange={(e) =>
                           setNewUser({ ...newUser, address: e.target.value })
                        }
                     />
                  </div> */}
                  <div>
                     <label htmlFor="email">Email</label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                           setNewUser({ ...newUser, email: e.target.value })
                        }
                     />
                  </div>
                  <div>
                     <label htmlFor="phone">Phone</label>
                     <input
                        type="tel"
                        name="phone"
                        id="phone"
                        onChange={(e) =>
                           setNewUser({ ...newUser, phone: e.target.value })
                        }
                     />
                  </div>
                  <div>
                     <label htmlFor="password">Mot de passe</label>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                           setNewUser({ ...newUser, password: e.target.value })
                        }
                     />
                  </div>
                  <div>
                     <label htmlFor="confirm">Confirmer</label>
                     <input
                        type="password"
                        name="confirm"
                        id="confirm"
                        onChange={(e) =>
                           setNewUser({ ...newUser, confirm: e.target.value })
                        }
                     />
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
