import React from "react";
import Reservations from "./Reservations";
import Contact from "./Contact";
import CardsRestaurant from "../components/CardsRestaurant";





const Accueil = () => {
  return (
  
  <>


  <section id="section" className="nous">

        <h2>Restaurant Brémontier</h2>
        <p>
          Notre restaurant familial situé à Labouheyre près de Mimizan, Biscarosse, Saugnac et Muret, Castets… 
          vous propose une cuisine landaise traditionnelle. 
          Au service de nos clients depuis plus de 50 ans, nous vous suggérons des plats authentiques et une carte des vins à savourer le midi ou le soir.
          Notons que le restaurant a été repris juin 2019 par Aude. 
          L’accueil est chaleureux, le lieu est sympa, sobre et cosy pour des moments inoubliables en famille ou entre amis.
        </p>
      </section>
  
    <CardsRestaurant/>






  </>



  )
};

export default Accueil;
