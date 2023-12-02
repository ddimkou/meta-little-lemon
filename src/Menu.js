import React from "react";

const Menu = () => {
  return (
    <section className="menu">
      <h2 className="menu-heading">Menu</h2>
      <div className="menu-container">
        <div className="menu-column">
          <section className="menu-section">
            <h3 className="section-heading">Appetizers</h3>
            <ul className="menu-list">
              <li className="menu-item">Bruschetta with Tomato and Basil</li>
              <li className="menu-item">
                Stuffed Mushrooms with Garlic and Cheese
              </li>
              <li className="menu-item">Spinach Artichoke Dip</li>
              <li className="menu-item">Caprese Skewers</li>
              <li className="menu-item">Garlic Parmesan Wings</li>
            </ul>
          </section>

          <section className="menu-section">
            <h3 className="section-heading">Main Courses</h3>
            <ul className="menu-list">
              <li className="menu-item">Chicken Alfredo Pasta</li>
              <li className="menu-item">
                Grilled Salmon with Lemon Butter Sauce
              </li>
              <li className="menu-item">Vegetable Stir-Fry</li>
              <li className="menu-item">Beef Tenderloin Steak</li>
              <li className="menu-item">Shrimp Scampi Linguine</li>
            </ul>
          </section>
        </div>

        <div className="menu-column">
          <section className="menu-section">
            <h3 className="section-heading">Desserts</h3>
            <ul className="menu-list">
              <li className="menu-item">Tiramisu</li>
              <li className="menu-item">Chocolate Lava Cake</li>
              <li className="menu-item">New York Cheesecake</li>
              <li className="menu-item">Mango Sorbet</li>
              <li className="menu-item">Apple Pie with Vanilla Ice Cream</li>
            </ul>
          </section>

          <section className="menu-section">
            <h3 className="section-heading">Cocktails</h3>
            <ul className="menu-list">
              <li className="menu-item">Classic Martini</li>
              <li className="menu-item">Mai Tai</li>
              <li className="menu-item">Espresso Martini</li>
              <li className="menu-item">Mango Mojito</li>
              <li className="menu-item">Whiskey Sour</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Menu;
