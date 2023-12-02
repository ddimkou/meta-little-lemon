import React from "react";
import { Link } from "react-router-dom";
import restaurant from "./assets/images/restaurant.jpg";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <img src={restaurant} alt="restaurant" />
      <div className="footer-info">
        <div className="category">
          <ul className="links">
            <h3>Links</h3>
            <li>
              <Link to="/" onClick={scrollTop}>
                Main
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={scrollTop}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reserve" onClick={scrollTop}>
                Book a Table
              </Link>
            </li>
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
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
