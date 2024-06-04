import React, { useEffect, useState } from "react";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";

import "../assets/css/services.css";

import loopIcon from "../assets/icons/loop.png";
import localizationIcon from "../assets/icons/localization.png";
import filterIcon from "../assets/icons/filter.png";
import { Profile } from "../components/profile";
import { api } from "../api";
import { Offre } from "../components/offre";

export const ServicesPage = (props) => {
   const [search, setSearch] = useState({ service: "", city: "" });
   const [offers, setOffers] = useState([]);
   const [profile, setProfile] = useState({});

   const loadSearch = (service = "", city = "") => {
      const url = `/offers?title[like]=${service}&city[like]=${city}`;
      api.get(url)
         .then((res) => {
            setOffers(res.data);
            return res.data;
         })
         .then((data) => {
            loadOfferProfile(data[0]);
         })
         .catch((err) => console.error(err));
   };

   const handleSearchSubmit = (event) => {
      event.preventDefault();
      // if (search.service?.length > 0 || search.city?.length > 0) {
      loadSearch(search.service, search.city);
      // }
   };

   useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {};
      searchParams.forEach((value, key) => {
         params[key] = value;
      });

      setSearch(params);
      const { service, city } = params;
      loadSearch(service, city);
   }, []);

   const loadOfferProfile = (offer) => {
      const url = `/profiles/${offer.profileId}`;
      api.get(url)
         .then((res) => {
            setProfile({ ...res.data, offer: offer });
         })
         .catch((err) => console.error(err));
   };

   return (
      <div className="services">
         <main className="main">
            <div className="profiles">
               {/* TODO : MAP PROFILES */}
               <Profile profile={profile} />
            </div>
            <div className="search-results">
               <div className="search">
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
                              id="city"
                              placeholder="ville"
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
                  {offers.map((offer, index) => {
                     return (
                        <div
                           key={index}
                           onClick={(e) => {
                              // console.log(offer);
                              loadOfferProfile(offer);
                           }}
                        >
                           <Offre offre={offer} />
                        </div>
                     );
                  })}
               </div>
            </div>
         </main>
      </div>
   );
};
