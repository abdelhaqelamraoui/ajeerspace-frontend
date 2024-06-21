import React, { useState } from "react";
import swal from "sweetalert";

import "../assets/css/register.css";
import "../assets/css/sweetalert.css";
import { api } from "../api";
import { useCookies } from "react-cookie";

export const CreateOfferPage = (props) => {
   const [cookies, setCookies] = useCookies(["profile_id"]);

   const [newOffer, setNewOffer] = useState({
      profileId: cookies.profile_id,
      title: "",
      description: "",
      price: "",
      city: "",
   });

   const addOffer = (event) => {
      event.preventDefault();
      console.log(newOffer);
      api.post("/offers", newOffer, {
         headers: {
            Authorization: `Bearer ${cookies.access_token}`,
         },
      })
         .then((res) => {
            //
            swal(
               "Offre bien ajouté",
               "Clickez OK pour consulter vos offres",
               "success"
            ).then((r) => {
               //
               // window.location.href = "/signin";
               window.history.back();
            });
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return (
      <div className="register">
         <main className="main">
            <h1 className="title">Créer un offre</h1>
            <form method="POST" onSubmit={addOffer}>
               <div className="fields">
                  <div>
                     <label htmlFor="title">Titre</label>
                     <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) =>
                           setNewOffer({ ...newOffer, title: e.target.value })
                        }
                     />
                  </div>
                  <div>
                     <label htmlFor="price">Prix</label>
                     <input
                        type="number"
                        name="price"
                        min={10}
                        id="price"
                        onChange={(e) =>
                           setNewOffer({
                              ...newOffer,
                              price: e.target.value,
                           })
                        }
                     />
                  </div>

                  <div>
                     <label htmlFor="city">Ville</label>
                     <input
                        type="city"
                        name="city"
                        id="city"
                        onChange={(e) =>
                           setNewOffer({ ...newOffer, city: e.target.value })
                        }
                     />
                  </div>

                  <div>
                     <label htmlFor="phone">Description</label>
                     <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={(e) =>
                           setNewOffer({
                              ...newOffer,
                              description: e.target.value,
                           })
                        }
                     />
                  </div>
               </div>
               <div className="action">
                  <button type="submit" className="btn">
                     Créer mon offre
                  </button>
               </div>
            </form>
         </main>
      </div>
   );
};
