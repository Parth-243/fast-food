import React, { useState } from "react";
import "./RestaurantHome.css";

const RestaurantHome = () => {
  const [foodItem, setFoodItem] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("Pizza");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

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

  return (
    <div className="restaurant-home">
      <h1 className="title">Welcome to Food Delight</h1>
      <form className="food-menu-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="foodItem">Food Item Name</label>
          <input
            type="text"
            id="foodItem"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="image">Food Image</label>
          <input type="file" id="image" onChange={handleImageChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="restaurantName">Restaurant Name</label>
          <input
            type="text"
            id="restaurantName"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add to Menu
        </button>
      </form>
    </div>
  );
};

export default RestaurantHome;
