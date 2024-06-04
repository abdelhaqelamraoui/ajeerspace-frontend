import React from "react";

import profileIcon from "../assets/icons/profile-blue.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import eamailIcon from "../assets/icons/email.png";
import websiteIcon from "../assets/icons/website.png";
import priceIcon from "../assets/icons/price.png";
import localizationIcon from "../assets/icons/localization.png";
import disponibleIcon from "../assets/icons/disponible.png";

export const Profile = (props) => {
   const profile = props.profile;
   return (
      <div className="profile">
         <div className="profile-header">
            <img src={profileIcon} alt="icon" className="profile-photo" />
            <div>
               <span className="profile-name" id="profile-name">
                  {profile.name}
               </span>
               <span className="profile-service" id="profile-service">
                  {profile.offer?.title}
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
               <span id="profile-phone">{profile.phone}</span>
            </div>
            <div className="iconed-info">
               <img
                  src={localizationIcon}
                  alt="icon"
                  style={{ width: "14px" }}
               />
               <span id="profile-localization">{profile.offer?.city}</span>
            </div>
            <div className="iconed-info">
               <img src={eamailIcon} alt="icon" />
               <a
                  id="profile-email"
                  href={"mailto:" + profile.email}
                  className="link"
               >
                  {profile.email}
               </a>
            </div>
            <div className="iconed-info">
               <img src={websiteIcon} alt="icon" />
               <a id="profile-website" className="link" href={profile.website}>
                  {profile.website}
               </a>
            </div>
            <div className="iconed-info">
               <img src={priceIcon} alt="icon" />
               <span id="profile-price">{profile.offer?.price} MAD</span>
            </div>
            <div className="profile-description">
               <label htmlFor="profile-offer-description">Description</label>
               <div id="profile-offer-description">
                  {profile.offer?.description}
               </div>
            </div>
         </div>
      </div>
   );
};
