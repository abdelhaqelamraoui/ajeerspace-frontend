import React, { useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/home.css";

import mapImg from "../assets/img/map.png";
import bgImg from "../assets/img/bg-img.png";
import lineImg from "../assets/img/line1.png";
import line2Img from "../assets/img/line1.png"; // FIXME
import influencerImg from "../assets/img/influencer.png";
import loopIcon from "../assets/icons/loop.png";
import localizationIcon from "../assets/icons/localization.png";
import logo from "../assets/icons/ajeerspace-logo.png";

export const HomePage = (props) => {
   const [search, setSearch] = useState({ service: "", city: "" });

   const handleSearchSubmit = (event) => {
      event.preventDefault();
      if (search.service.length > 0 || search.city.length) {
         window.location.href = `/services?service=${search.service}&city=${search.city}`;
      }
   };
   return (
      <div>
         <Navbar />
         <div className="main">
            <section className="section-1">
               <div className="bg section-1-bg">
                  <img src={bgImg} alt="" id="bg-1" className="bg-img" />
                  <img src={bgImg} alt="" id="bg-2" className="bg-img" />
                  <img src={bgImg} alt="" id="bg-3" className="bg-img" />
                  <img src={bgImg} alt="" id="bg-4" className="bg-img" />
               </div>
               <div className="content">
                  <div className="search-div">
                     <div className="titles">
                        <h1 className="title">
                           Trouver le service que vous désirez
                        </h1>
                        <h3 className="sub-title">
                           Cherchez tout service en toutes villes
                        </h3>
                     </div>
                     <div className="search-form">
                        <form
                           action=""
                           method="post"
                           className=""
                           onSubmit={handleSearchSubmit}
                        >
                           <div className="bordered rounded">
                              <div>
                                 <img src={loopIcon} alt="" />
                                 <input
                                    type="search"
                                    name="service"
                                    id="service"
                                    placeholder="service"
                                    min={3}
                                    onChange={(e) =>
                                       setSearch({
                                          ...search,
                                          service: e.target.value,
                                       })
                                    }
                                 />
                              </div>
                              <div className="separator"></div>
                              <div>
                                 <img src={localizationIcon} alt="" />
                                 <input
                                    type="search"
                                    name="city"
                                    id=""
                                    placeholder="ville"
                                    min={3}
                                    onChange={(e) =>
                                       setSearch({
                                          ...search,
                                          city: e.target.value,
                                       })
                                    }
                                 />
                              </div>
                           </div>
                           <button type="submit" className="btn">
                              Rechercher
                           </button>
                        </form>
                        <p>
                           Vous prestez un service,{" "}
                           <a href="#" className="link">
                              poster le ici
                           </a>
                        </p>
                     </div>
                  </div>
                  <div className="illustration">
                     <img src={mapImg} alt="" />
                  </div>
               </div>
            </section>

            <section className="section-2">
               <div className="bg section-2-bg">
                  <img src={influencerImg} alt="" className="illustration" />
                  <img src={lineImg} alt="" className="bg-line" />
               </div>
               <div className="content">
                  <div className="titles">
                     <h1 className="title">Vous êtes société ou individu ?</h1>
                     <h2>Postez votre service et élargissezvotre clientèle</h2>
                  </div>
                  <div className="text">
                     <ul>
                        <li>Quel service vous prestez ?</li>
                        <li>Informations de contact</li>
                        <li>Votre zonz de service</li>
                     </ul>
                  </div>
                  <div className="action">
                     <a href="/register">
                        <button className="btn">Créer un compte</button>
                     </a>
                  </div>
               </div>
            </section>

            <section className="section-3">
               <div className="bg section-3-bg">
                  <img src={bgImg} alt="" className="bg-img bg-1" />
                  <img src={bgImg} alt="" className="bg-img bg-2" />
                  {/* <img src={line2Img} alt=""  className="bg-line"/> */}
                  {/* FIXME */}
               </div>
               <div className="content">
                  <div className="titles">
                     <h1 className="title">Pourquoi Ajeerspace ?</h1>
                  </div>
                  <div className="text">
                     <div>
                        <ul>
                           <li>Différents services</li>
                           <li>Partout</li>
                           <li>Gratuit</li>
                           <li>Rapide</li>
                        </ul>
                     </div>
                     <div className="logo-div">
                        <div className="vline"></div>
                        <img src={logo} alt="" />
                        <div className="vline"></div>
                     </div>
                     <div>
                        <ul>
                           <li>Individs</li>
                           <li>Auto-entrepreneurs</li>
                           <li>Entreprises</li>
                           <li>Sociétés</li>
                           <li>...</li>
                        </ul>
                     </div>
                  </div>
                  <div className="action">
                     <a href="/register" className="link">
                        <button className="btn bordered outlined">
                           Créer un compte
                        </button>
                     </a>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </div>
   );
};
