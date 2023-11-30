// RestaurantInfos.js
import React from "react";

const RestaurantInfos = () => {
  return (
    <section className="restaurant-info">
      <h2>Restaurant Information</h2>
      <div className="infos-container">
        {/* Opening Hours Card */}
        <div className="info-card">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
          <p>Saturday - Sunday: 12:00 PM - 10:00 PM</p>
        </div>

        {/* Payment Methods Card */}
        <div className="info-card">
          <h3>Payment Methods</h3>
          <p>We accept cash, credit cards, and mobile payments.</p>
        </div>

        {/* Menu Information Card */}
        <div className="info-card">
          <h3>Menu Information</h3>

          <ul>
            <li>Vegan Options</li>
            <li>Vegetarian Choices</li>
            <li>Gluten-Free Alternatives</li>
            <li>Dairy-Free Selections</li>
            <li>Nut-Free Options</li>
            <li>Low-Carb Alternatives</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfos;
