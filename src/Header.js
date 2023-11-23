import React from "react";
import Logo from "./assets/images/Logo .svg";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Book a Table</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
