import React, { useEffect, useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";
import { useLocation } from "react-router-dom";

import "../assets/css/offres.css";
import { api, moroccanCities } from "../api";
import { useCookies } from "react-cookie";
import swal from "sweetalert";

export const OffresPage = (props) => {
   const [offres, setOffres] = useState([]);
   const [cookies] = useCookies(["access_token"]);

   // const location = useLocation();
   // const queryParams = new URLSearchParams(location.search);
   // const profileId = queryParams.get("profileId");

   useEffect(() => {
      api.get(`/offers?profileId=${cookies.profile_id}`)
         .then((res) => {
            console.log(res.data);
            setOffres(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const editOffre = (id) => {
      //
   };

   const deleteOffre = (id) => {
      swal({
         title: "Supprimer votre offre?",
         text: "Apreès la suppression, votre n'est plus publié!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            api.delete(`/offers/${id}`, {
               headers: { Authorization: `Bearer ${cookies.access_token}` },
            })
               .then((res) => {
                  //
                  swal("Offre est bien supprimé");
                  setOffres(offres.filter((o) => o.id != id));
               })
               .catch((err) => {
                  console.log(err);
               });
         } else {
            swal("Operation annulée");
         }
      });
   };

   return (
      <div className="offres">
         <main className="main">
            <h1>Offres</h1>
            <div className="nav-actions">
               <a href="/create-offer" className="btn">
                  Créer
               </a>
            </div>
            <table>
               <thead>
                  <tr>
                     <th>Num</th>
                     <th>Titre</th>
                     <th>Ville</th>
                     <th>Prix</th>
                     <th>Description</th>
                     <th colSpan={2}>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {offres &&
                     offres.map((offre, i) => {
                        return (
                           <tr>
                              <td>{i + 1}</td>
                              <td>{offre.title}</td>
                              <td>{offre.city}</td>
                              <td>{offre.price}</td>
                              <td>{offre.description}</td>
                              <td className="">
                                 <a
                                    href="#"
                                    className="link"
                                    onClick={(e) => editOffre(offre.id)}
                                 >
                                    Modifier
                                 </a>
                              </td>
                              <td className="">
                                 <a
                                    href="#"
                                    className="link"
                                    onClick={(e) => deleteOffre(offre.id)}
                                 >
                                    Supprimer
                                 </a>
                              </td>
                           </tr>
                        );
                     })}
               </tbody>
            </table>
         </main>
      </div>
   );
};
