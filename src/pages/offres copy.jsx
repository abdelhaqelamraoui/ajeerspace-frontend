import React, { useEffect, useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";
import { useLocation } from "react-router-dom";

import "../assets/css/offres.css";
import { api, moroccanCities } from "../api";
import { useCookies } from "react-cookie";

export const OffresPageCopy = (props) => {
   const [offre, setOffre] = useState({});
   const [cookies] = useCookies(["access_token"]);

   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const profileId = queryParams.get("profileId");

   console.log(profileId);

   useEffect(() => {
      api.get(`/offers?profileId=${profileId}`)
         .then((res) => {
            console.log(res.data);
            setOffre(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="offres">
         <Navbar />
         <main className="main">
            <h1>Offres</h1>
            <form action="">
               <div className="fields">
                  <div>
                     <label htmlFor="titre">Titre</label>
                     <input type="text" name="titre" id="titre" />
                  </div>
                  <div>
                     <label htmlFor="adresse">Adresse</label>
                     <input type="text" name="adresse" id="adresse" />
                  </div>
                  <div>
                     <label htmlFor="ville">Ville</label>
                     <select name="ville" id="ville">
                        <option value="" disabled selected>
                           Selectionner votre ville
                        </option>
                        {moroccanCities.map((city, i) => {
                           return (
                              <option key={i} value={city}>
                                 {city}
                              </option>
                           );
                        })}
                     </select>
                  </div>
                  <div>
                     <label htmlFor="phone">Téléphone</label>
                     <input type="tel" name="phone" id="phone" />
                  </div>
                  <div>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" />
                  </div>
                  <div>
                     <label htmlFor="website">Site Web</label>
                     <input type="text" name="website" id="website" />
                  </div>
                  <div>
                     <label htmlFor="prix">Prix</label>
                     <input type="number" name="prix" id="prix" min={1} />
                  </div>
                  <div>
                     <label htmlFor="description">Description</label>
                     <textarea name="description" id="description"></textarea>
                  </div>
               </div>
               <div className="action">
                  <button type="submit" className="btn">
                     Publier mon offre
                  </button>
               </div>
            </form>
         </main>
         <Footer />
      </div>
   );
};
