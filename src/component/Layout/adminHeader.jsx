import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./restaurantHeader.css";

const AdminHeader = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/admin/auth/user", {
          method: "GET",
          credentials: "include", // Ensure cookies are included in the request
        });

        if (response.status === 401) {
          navigate("/adminLogin");
          return;
        }

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
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/auth/logout", {
        method: "POST",
        credentials: "include", // Ensure cookies are included in the request
      });

      if (!response.ok) {
        throw new Error("Failed to log out");
      }

      setUser(null);
      navigate("/adminLogin"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">FoodExpress</Link>
        </div>
        <nav className="nav-links">
          <Link to="/adminHomePage">Home</Link>
          {user ? (
            <>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
            </>
          ) : (
            <Link to="/adminLogin">Admin Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
