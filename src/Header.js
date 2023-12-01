import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="Little Lemon logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reserve">Book a Table</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
