import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RestaurantHome.module.css";
import RestaurantHeader from "../../Layout/restaurantHeader";
import RestaurantRegistration from "./RestaurantRegistration";

const RestaurantHome = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/business/restaurant",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 401) {
          navigate("/businessLogin");
        }

        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [navigate]);

  const handleRegistrationSubmit = (restaurantData) => {
    // Handle registration form submission here
    console.log(restaurantData);
    setShowRegistration(false); // Close the modal after submission
  };

  const handleCancel = () => {
    setShowRegistration(false);
  };

  return (
    <>
      <RestaurantHeader />

      <div className={styles.restaurantPage}>
        <div className="user-info">
          <div className="user-name-box">
            <h2>Welcome, Business User!</h2>
          </div>
          <div className="user-img-box">
            <img src="dummy-img.jpg" alt="User" />
          </div>
        </div>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Your Restaurants</h1>
          <button
            className={styles.registerButton}
            onClick={() => setShowRegistration(true)}
          >
            Register More Restaurant
          </button>
        </div>
        {restaurants.length === 0 ? (
          <div className={styles.noRestaurants}>
            <RestaurantRegistration onSubmit={handleRegistrationSubmit} />
          </div>
        ) : (
          <div className={styles.restaurantGrid}>
            {restaurants.map((restaurant) => (
              <Link to="/RestaurantFoodMenu" style={{ textDecoration: "none" }}>
                <div
                  key={restaurant._id}
                  className={styles.restaurantCard}
                  onClick={() => navigate(`/restaurant/${restaurant._id}`)}
                >
                  <img
                    src={restaurant.picture}
                    alt={restaurant.name}
                    className={styles.restaurantImage}
                  />
                  <div className={styles.restaurantInfo}>
                    <h2 className={styles.restaurantName}>{restaurant.name}</h2>
                    <p className={styles.restaurantDescription}>
                      {restaurant.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {showRegistration && (
          <RestaurantRegistration
            onSubmit={handleRegistrationSubmit}
            onCancel={handleCancel}
          />
        )}
      </div>
    </>
  );
};

export default RestaurantHome;
