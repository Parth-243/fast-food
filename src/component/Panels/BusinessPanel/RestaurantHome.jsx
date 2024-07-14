import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./RestaurantHome.module.css"; // Import CSS module
import RestaurantHeader from "../../Layout/restaurantHeader";
import RestaurantRegistration from "./RestaurantRegistration";

const RestaurantHome = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:4000/business/restaurant", {
          method: "GET",
          credentials: "include", // Ensure cookies are included in the request
        });

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
  }, []);

  const handleRegistrationSubmit = async (restaurantData) => {
    try {
      const response = await fetch("http://localhost:4000/business/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are included in the request
        body: JSON.stringify(restaurantData),
      });

      if (!response.ok) {
        throw new Error("Failed to register restaurant");
      }

      const newRestaurant = await response.json();
      setRestaurants([...restaurants, newRestaurant]);
    } catch (error) {
      console.error("Error registering restaurant:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (restaurants.length === 0) {
    return (
      <div className={styles["restaurant-page"]}>
        <RestaurantHeader />
        <RestaurantRegistration onSubmit={handleRegistrationSubmit} />
      </div>
    );
  }

  return (
    <div className={styles["restaurant-page"]}>
      <RestaurantHeader />
      <div className={styles["restaurant-tiles"]}>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className={styles["restaurant-tile"]}
            onClick={() => navigate(`/restaurant/${restaurant._id}`)}
          >
            <img src={restaurant.picture} alt={restaurant.name} className={styles["restaurant-image"]} />
            <div className={styles["restaurant-info"]}>
              <h2 className={styles["restaurant-name"]}>{restaurant.name}</h2>
              <p className={styles["restaurant-description"]}>{restaurant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantHome;
