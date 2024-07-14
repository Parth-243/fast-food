import React from "react";
import { Link } from "react-router-dom";
import "./restaurantHeader.css";

const RestaurantHeader = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">FoodExpress</Link>
        </div>
        <nav className="nav-links">
          <Link to="/restaurantPage">Home</Link>
          <Link to="/foodMenuList">Food Menu</Link>
          <Link to="">Payment</Link>
          <Link to="/businessProfile">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default RestaurantHeader;
