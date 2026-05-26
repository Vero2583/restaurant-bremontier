import React from "react";
import Card from "../components/Card";
import cards from "../data/restaurant";


function CardsRestaurant() {
  return (
    <>
      <h2>Restaurant</h2>

      <section className="card_container">
        {cards.map(({imgSrc, imgAlt, title, buttonTitle}) => (
          <Card
            key={title}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
            buttonTitle={buttonTitle}
          />
        ))}
      </section>
    </>
  );
}

export default CardsRestaurant;
