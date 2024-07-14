import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./RestaurantHome.module.css"; // Import CSS module
import RestaurantHeader from "../../Layout/restaurantHeader";
import RestaurantRegistration from "./RestaurantRegistration";

const RestaurantHome = () => {
  const [foodItem, setFoodItem] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("Pizza");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      foodItem,
      ingredients,
      category,
      image,
      price,
      restaurantName,
    });
  };

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
      <div className={styles["restaurant-home"]}>
        <h1 className={styles.title}>Welcome to Food Delight</h1>
        <form className={styles["food-menu-form"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="foodItem">Food Item Name</label>
            <input
              type="text"
              id="foodItem"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            ></textarea>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="category">Food Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Noodles">Noodles</option>
              <option value="Desserts">Desserts</option>
              <option value="Ice cream">Ice cream</option>
              <option value="French fries">French fries</option>
              <option value="Soft drinks">Soft drinks</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="image">Food Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles["submit-button"]}>
            Add to Menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantHome;
