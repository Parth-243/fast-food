import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./restaurantHeader.css";

const RestaurantHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/business/auth/user", {
          method: "GET",
          credentials: "include", // Ensure cookies are included in the request
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, []);

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
          {user ? (
            <Link to="/businessProfile">{user.username}</Link>
          ) : (
            <Link to="/businessProfile">Profile</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default RestaurantHeader;
