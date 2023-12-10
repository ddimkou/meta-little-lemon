import React from "react";
import eric from "../assets/images/eric.jpg";
import james from "../assets/images/james.jpg";
import mike from "../assets/images/mike.jpg";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Latest Reviews</h2>
      <div className="reviews-container">
        <div className="review-card">
          <div className="user-info">
            <h3>Eric</h3>
          </div>
          <div className="review-content">
            <img src={eric} alt="Review 1" />
            <div className="score">5</div>
          </div>
          <div className="comment">
            <h3>Mouthwatering Fusion</h3>
            <p>
              This spot seamlessly blends Italian and Greek flavors. Each dish
              is a delightful fusion that promises a taste adventure. Don't miss
              their pasta and moussaka; it's Mediterranean magic on a plate!
            </p>
          </div>
        </div>

        <div className="review-card border-templ">
          <div className="user-info">
            <h3>James</h3>
          </div>
          <div className="review-content">
            <img src={james} alt="Review 2" />
            <div className="score">4</div>
          </div>
          <div className="comment">
            <h3>Perfect Pairing</h3>
            <p>
              Italian and Greek cuisine unite in this charming restaurant. From
              pasta to moussaka, every bite is a journey through the
              Mediterranean. Ideal for a romantic dinner or family outing
            </p>
          </div>
        </div>

        <div className="review-card">
          <div className="user-info">
            <h3>Mike</h3>
          </div>
          <div className="review-content">
            <img src={mike} alt="Review 3" />
            <div className="score">5</div>
          </div>
          <div className="comment">
            <h3>Tantalizing Flavors</h3>
            <p>
              Experience a culinary dance where Italian and Greek dishes take
              center stage. From bruschetta to tzatziki, the menu offers a
              unique and delicious fusion. A must-visit for flavor enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
