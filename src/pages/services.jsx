import React from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/services.css";

import loopIcon from "../assets/icons/loop.png";
import localizationIcon from "../assets/icons/localization.png";
import profileIcon from "../assets/icons/profile-blue.png";
import disponibleIcon from "../assets/icons/disponible.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import eamailIcon from "../assets/icons/email.png";
import websiteIcon from "../assets/icons/website.png";
import priceIcon from "../assets/icons/price.png";
import filterIcon from "../assets/icons/filter.png";

export const ServicesPage = (props) => {
   return (
      <div className="services">
         <Navbar />
         <main className="main">
            <div className="profiles">
               <div className="profile">
                  <div className="profile-header">
                     <img
                        src={profileIcon}
                        alt="icon"
                        className="profile-photo"
                     />
                     <div>
                        <span className="profile-name" id="profile-name">
                           Said El Maliki
                        </span>
                        <span className="profile-service" id="profile-service">
                           Web Designer
                        </span>
                     </div>
                  </div>
                  <div className="profile-body">
                     <div className="iconed-info">
                        <img src={disponibleIcon} alt="icon" />
                        <span id="profile-disponible">disponible</span>
                     </div>
                     <div className="iconed-info">
                        <img src={whatsappIcon} alt="icon" />
                        <span id="profile-disponible">06 11 22 33 44</span>
                     </div>
                     <div className="iconed-info">
                        <img src={localizationIcon} alt="icon" />
                        <span id="profile-disponible">Errachidia</span>
                     </div>
                     <div className="iconed-info">
                        <img src={eamailIcon} alt="icon" />
                        <span id="profile-disponible">my-email@gmail.com</span>
                     </div>
                     <div className="iconed-info">
                        <img src={websiteIcon} alt="icon" />
                        <span id="profile-disponible">my-website.com</span>
                     </div>
                     <div className="iconed-info">
                        <img src={priceIcon} alt="icon" />
                        <span id="profile-disponible">1000.00 MAD</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="search-results">
               <div className="search">
                  <form action="" method="post" className="">
                     <div className="bordered rounded">
                        <div>
                           <img src={loopIcon} alt="" />
                           <input
                              type="search"
                              name="service"
                              id=""
                              placeholder="service"
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
                           />
                        </div>
                     </div>
                     <button type="submit" className="btn">
                        Rechercher
                     </button>
                  </form>
                  <div className="filters">
                     <button className="btn outlined">
                        <span>Filters</span>
                        <img src={filterIcon} alt="icon" />
                     </button>
                     <div className="choices">
                        <div>
                           <input
                              type="checkbox"
                              name="filter-cheap"
                              id="filter-cheap"
                           />
                           <label htmlFor="filter-cheap">moins cher</label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              name="filter-disponible"
                              id="filter-disponible"
                           />
                           <label htmlFor="filter-disponible">disponible</label>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="results">
                  <div className="result">
                     <div className="nom" id="nom">
                        Said El Maliki
                     </div>
                     <div className="service" id="service">
                        Web Designer
                     </div>
                     <div className="disponible iconed-info" id="disponible">
                        <img src={disponibleIcon} alt="icon" />
                        <span>disponible</span>
                     </div>
                     <div className="ville" id="ville">
                        Errachidia
                     </div>
                  </div>

                  <div className="result">
                     <div className="nom" id="nom">
                        Said El Maliki
                     </div>
                     <div className="service" id="service">
                        Web Designer
                     </div>
                     <div className="disponible iconed-info" id="disponible">
                        <img src={disponibleIcon} alt="icon" />
                        <span>disponible</span>
                     </div>
                     <div className="ville" id="ville">
                        Errachidia
                     </div>
                  </div>
               </div>
            </div>
         </main>
         {/* <Footer /> */}
      </div>
   );
};
