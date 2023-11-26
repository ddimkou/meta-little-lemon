// Reviews.js
import React from "react";
import eric from "../assets/images/eric.jpg";
import james from "../assets/images/james.jpg";
import mike from "../assets/images/mike.jpg";

const Reviews = () => {
  return (
    <>
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
          <p>A small review goes here...</p>
        </div>

        <div className="review-card">
          <div className="user-info">
            <h3>James</h3>
          </div>
          <div className="review-content">
            <img src={james} alt="Review 2" />
            <div className="score">4</div>
          </div>
          <p>Another small review goes here...</p>
        </div>

        <div className="review-card">
          <div className="user-info">
            <h3>Mike</h3>
          </div>
          <div className="review-content">
            <img src={mike} alt="Review 3" />
            <div className="score">5</div>
          </div>
          <p>One more small review goes here...</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
