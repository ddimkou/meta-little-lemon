import React from "react";
import restaurantFood from "../assets/images/restauranfood.jpg";
const Hero = () => {
  return (
    <>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Indulge in the Fusion of Flavors: Italian-Greek Cuisine with Fresh
          Ingredients!
        </p>
        <div className="button">
          <button>Book a Table</button>
        </div>
      </div>
      <div className="right-side">
        <img src={restaurantFood} alt="bruscetta plate" />
      </div>
    </>
  );
};

export default Hero;
