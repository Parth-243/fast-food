import React from "react";
import { Link } from "react-router-dom";
import "./restaurantHeader.css";

const AdminHeader = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">FoodExpress</Link>
        </div>
        <nav className="nav-links">
          <Link to="/adminHomePage">Home</Link>
          <Link to="">Logout</Link>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
