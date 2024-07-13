import React, { useState, useEffect } from "react";
import "./FoodMenuForm.css";

const FoodMenuForm = ({ food, onSave, onCancel }) => {
  const [foodItem, setFoodItem] = useState(food.foodItem);
  const [ingredients, setIngredients] = useState(food.ingredients);
  const [category, setCategory] = useState(food.category);
  const [image, setImage] = useState(food.image);
  const [price, setPrice] = useState(food.price);

  useEffect(() => {
    setFoodItem(food.foodItem);
    setIngredients(food.ingredients);
    setCategory(food.category);
    setImage(food.image);
    setPrice(food.price);
  }, [food]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...food,
      foodItem,
      ingredients,
      category,
      image,
      price,
    });
  };

  return (
    <div className="food-menu-form-modal">
      <div className="food-menu-form-content">
        <h2>Edit Food Item</h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="image">Food Image URL</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
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
          <button type="submit" className="save-button">
            Save
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodMenuForm;
