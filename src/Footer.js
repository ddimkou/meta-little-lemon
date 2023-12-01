import React from "react";
import restaurant from "./assets/images/restaurant.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={restaurant} alt="restaurant" />
      <div className="footer-info">
        <div className="category">
          <ul className="links">
            <h3>Links</h3>
            <li>Main</li>
            <li>Menu</li>
            <li>Book a Table</li>
          </ul>
        </div>
        <div className="category">
          <ul className="contact-info">
            <h3>Contact Info</h3>
            <li>St. Martin 128B</li>
            <li>21 0999 9999</li>
          </ul>
        </div>
        <div className="category">
          <ul className="social">
            <h3>Social Media</h3>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
