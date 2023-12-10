// About.js
import React from "react";
import pasta1 from "../assets/images/pasta1.jpg";
import pasta2 from "../assets/images/pasta2.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Welcome to Little Lemon, an Italian-Greek restaurant nestled in the
          heart of Chicago. Our culinary journey combines the rich flavors of
          traditional Italian and Greek cuisines to create a unique and
          unforgettable dining experience. From handmade pasta dishes to
          mouthwatering souvlaki, each dish is crafted with passion and
          authenticity. Join us on a gastronomic adventure, where every bite
          tells a story of tradition, quality, and the joy of good food.
        </p>
      </div>
      <div className="about-right">
        <img
          src={pasta1}
          alt="Little Lemon Logo"
          className="pasta1 border-templ"
        />
        <img
          src={pasta2}
          alt="Restaurant Interior"
          className="pasta2 border-templ"
        />
      </div>
    </div>
  );
};

export default About;
