import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/images/Logo.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    console.log(menuVisible);
  };
  return (
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="Little Lemon logo" />
      </Link>
      <nav className={menuVisible ? "menu-visible" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Main
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reserve" onClick={toggleMenu}>
              Book a Table
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;
