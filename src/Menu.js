import React from "react";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-column">
        <h2 className="menu-heading">Menu</h2>

        <section className="menu-section">
          <h3 className="section-heading">Appetizers</h3>
          <ul className="menu-list">
            <li className="menu-item">Bruschetta with Tomato and Basil</li>
            <li className="menu-item">
              Stuffed Mushrooms with Garlic and Cheese
            </li>
          </ul>
        </section>

        <section className="menu-section">
          <h3 className="section-heading">Main Courses</h3>
          <ul className="menu-list">
            <li className="menu-item">Chicken Alfredo Pasta</li>
            <li className="menu-item">
              Grilled Salmon with Lemon Butter Sauce
            </li>
          </ul>
        </section>
      </div>

      <div className="menu-column">
        <section className="menu-section">
          <h3 className="section-heading">Desserts</h3>
          <ul className="menu-list">
            <li className="menu-item">Tiramisu</li>
            <li className="menu-item">Chocolate Lava Cake</li>
          </ul>
        </section>

        <section className="menu-section">
          <h3 className="section-heading">Cocktails</h3>
          <ul className="menu-list">
            <li className="menu-item">Margarita</li>
            <li className="menu-item">Mojito</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Menu;
