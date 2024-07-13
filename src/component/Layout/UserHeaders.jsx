import React from "react";
import { Link } from "react-router-dom";
import "./restaurantHeader.css";

const UserHeader = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">FoodExpress</Link>
        </div>
        <nav className="nav-links">
          <Link to="/userHomePage">Home</Link>
          <Link to="/fastFood">Fast Food</Link>
          <Link to="/userCartHistory">Card</Link>
          <Link to="/userOrderHistory">Order</Link>
          <Link to="/userProfile">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
