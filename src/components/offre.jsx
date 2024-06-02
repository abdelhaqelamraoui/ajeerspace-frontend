import React from "react";
import disponibleIcon from "../assets/icons/disponible.png";

export const Offre = (props) => {
   const result = props.offre;
   return (
      <div className="result">
         <div className="nom" id="nom">
            {/* {result.nom + " " + result.prenom} */}
            {result.title.slice(0, 30)}
         </div>
         {/* <div className="service" id="service">
            {result.service}
         </div>
         <div className="disponible iconed-info" id="disponible">
            <img src={disponibleIcon} alt="icon" />
            <span>disponible</span>
         </div> */}
         <div className="price" id="price">
            {result.price} DHs
         </div>
         <div className="ville" id="ville">
            {result.city}
         </div>
      </div>
   );
};
