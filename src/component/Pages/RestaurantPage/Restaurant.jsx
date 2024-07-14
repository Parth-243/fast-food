import React, { useState } from "react";
import "./Restaurant.css";

const foods = [
  {
    name: "Burger",
    image: "burger.png",
    description: "Delicious beef burger with fresh vegetables.",
    price: 200,
    category: "Burger",
  },
  {
    name: "Pizza",
    image: "pizza.png",
    description: "Cheesy pizza with pepperoni and olives.",
    price: 300,
    category: "Pizza",
  },
  {
    name: "French Fries",
    image: "french_fries.png",
    description: "Crispy french fries with a side of ketchup.",
    price: 100,
    category: "French Fries",
  },
  {
    name: "Noodles",
    image: "noodles.png",
    description: "Stir-fried noodles with vegetables and chicken.",
    price: 250,
    category: "Noodles",
  },
  {
    name: "Dessert",
    image: "dessert.png",
    description: "Sweet dessert to end your meal on a high note.",
    price: 150,
    category: "Dessert",
  },
  {
    name: "Soft Drink",
    image: "soft_drink.png",
    description: "Refreshing soft drink to quench your thirst.",
    price: 50,
    category: "Soft Drink",
  },
  {
    name: "Pasta",
    image: "Pasta.png",
    description: "Creamy pasta with mushrooms and cheese.",
    price: 350,
    category: "Pasta",
  },
];

function Restaurant() {
  const [filterCategory, setFilterCategory] = useState("");

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleOrderClick = () => {
    alert("To order please login/sign up");
  };

  const filteredFoods = foods.filter(
    (food) => !filterCategory || food.category === filterCategory
  );

  return (
    <div className="restaurant-page">
      <div className="header">
        <h1>Restaurant Name</h1>
        <div className="filter">
          <label>Filter by Category: </label>
          <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="French Fries">French Fries</option>
            <option value="Noodles">Noodles</option>
            <option value="Dessert">Dessert</option>
            <option value="Soft Drink">Soft Drink</option>
            <option value="Pasta">Pasta</option>
          </select>
        </div>
      </div>
      <div className="food-container">
        {filteredFoods.map((food, index) => (
          <div className="food-card" key={index}>
            <img src={food.image} alt={food.name} className="food-image" />
            <div className="food-details">
              <h2 className="food-name">{food.name}</h2>
              <p className="food-description">{food.description}</p>
              <p className="food-price">Price: ₹{food.price}</p>
              <button className="order-button" onClick={handleOrderClick}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
