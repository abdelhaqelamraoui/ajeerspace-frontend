import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/profil.css";
import { api } from "../api";
import { useCookies } from "react-cookie";
import swal from "sweetalert";

export const ProfilPage = (props) => {
   const [edit, setEdit] = useState(false);
   const [profil, setProfil] = useState({
      name: "",
      phone: "",
      email: "",
      website: "",
   });
   const [cookies] = useCookies(["access_token"]);

   const nameRef = useRef();
   const emailRef = useRef();
   const phoneRef = useRef();
   const websiteRef = useRef();

   const updateProfil = (event) => {
      //
      event.preventDefault();
      // const newProfile = {
      //    name: nameRef.current.value,
      //    email: emailRef.current.value,
      //    phone: phoneRef.current.value,
      //    website: websiteRef.current.value,
      // };
      api.put("/profiles", profil)
         .then((res) => {
            setProfil(profil);
            setEdit(false);
            swal(
               "Profil bien modifié",
               "Clickez OK pour s'authentifier",
               "success"
            );
         })
         .catch((err) => {
            console.error(err);
         });
   };

   useEffect(() => {
      if (!cookies.access_token) {
         window.location.href = "/signin";
         return;
      }
      //
      // set the profil here
      api.get(`/profiles?userId=${cookies.user_id}`, {
         headers: {
            Authorization: `Bearer ${cookies.access_token}`,
         },
      })
         .then((res) => {
            setProfil(res.data);
            // nameRef.current.value = res.data.name;
            // emailRef.current.value = res.data.email;
            // addressRef.current.value = res.data.address;
            // phoneRef.current.value = res.data.phone;
            // websiteRef.current.value = res.data.website;
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="profil">
         <main className="main">
            <div className="nav">
               <h1>Mon Profil</h1>
               <div className="actions">
                  <a href="#" className="link" onClick={(e) => setEdit(!edit)}>
                     Modifier mon profil
                  </a>
                  <a href={`offres?profileId=${profil.id}`} className="link">
                     Mes offres
                  </a>
               </div>
            </div>

            <form action="" onSubmit={updateProfil}>
               <div className="fields">
                  <div>
                     <label htmlFor="nom">Nom</label>
                     <input
                        type="text"
                        name="nom"
                        id="titre"
                        readOnly={!edit}
                        value={profil.name}
                        onChange={(e) =>
                           setProfil({ ...profil, name: e.target.value })
                        }
                        // ref={nameRef}
                     />
                  </div>

                  <div>
                     <label htmlFor="phone">Téléphone</label>
                     <input
                        type="tel"
                        name="phone"
                        id="phone"
                        readOnly={!edit}
                        value={profil.phone}
                        // ref={phoneRef}
                        onChange={(e) =>
                           setProfil({ ...profil, phone: e.target.value })
                        }
                     />
                  </div>

                  <div>
                     <label htmlFor="email">Email</label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        readOnly={!edit}
                        value={profil.email}
                        // ref={emailRef}
                        onChange={(e) =>
                           setProfil({ ...profil, email: e.target.value })
                        }
                     />
                  </div>

                  <div>
                     <label htmlFor="website">Site Web</label>
                     <input
                        type="text"
                        name="website"
                        id="website"
                        readOnly={!edit}
                        value={profil.website}
                        // ref={websiteRef}
                        onChange={(e) =>
                           setProfil({ ...profil, website: e.target.value })
                        }
                     />
                  </div>
               </div>
               <div className="action">
                  {edit && (
                     <button type="submit" className="btn">
                        Mettre à jour
                     </button>
                  )}
               </div>
            </form>
         </main>
      </div>
   );
};
