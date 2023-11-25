import React from "react";
import greekSalad from "../assets/images/greek salad.jpg";
import lemonDessert from "../assets/images/lemon dessert.jpg";
import bruschetta from "../assets/images/bruschetta.jpg";
const Specials = () => {
  return (
    <>
      <h2>Specials</h2>
      <div className="specials-container">
        <div className="special-card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="card-info">
            <div className="top">
              <h3>Greek Salad</h3>
              <p>12.45$</p>
            </div>
            <p className="description">
              Also known as "Horiatiki" in Greece, is a refreshing and vibrant
              dish that features a combination of fresh and flavorful
              ingredients.
            </p>
          </div>
        </div>

        <div className="special-card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-info">
            <div className="top">
              <h3>Lemon Dessert</h3>
              <p>9.60$</p>
            </div>
            <p className="description">
              A delightful and zesty treat that combines the bright and citrusy
              flavor of lemons with sweet and often creamy elements
            </p>
          </div>
        </div>

        <div className="special-card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-info">
            <div className="top">
              <h3>Bruschetta</h3>
              <p>7.20$</p>
            </div>
            <p className="description">
              Grilled bread slices rubbed with garlic, drizzled with olive oil,
              and topped with a tomato onion and basil. and tastes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specials;
