import React, { useState } from "react";
import "./FastFood.css";

const foods = [
  {
    name: "Burger",
    image: "burger.png",
    description: "Delicious beef burger with fresh vegetables.",
    restaurant: "Burger Farm",
    price: 200,
  },
  {
    name: "Pizza",
    image: "pizza.png",
    description: "Cheesy pizza with pepperoni and olives.",
    restaurant: "Pizza Hut",
    price: 300,
  },
  {
    name: "French Fries",
    image: "french_fries.png",
    description: "Crispy french fries with a side of ketchup.",
    restaurant: "Fizzy Fizz",
    price: 100,
  },
  {
    name: "Noodles",
    image: "noodles.png",
    description: "Stir-fried noodles with vegetables and chicken.",
    restaurant: "Chinese Delight",
    price: 250,
  },
  {
    name: "Dessert",
    image: "dessert.png",
    description: "Sweet dessert to end your meal on a high note.",
    restaurant: "Sweet Treats",
    price: 150,
  },
  {
    name: "Soft Drink",
    image: "soft_drink.png",
    description: "Refreshing soft drink to quench your thirst.",
    restaurant: "Cool Drinks",
    price: 50,
  },
  {
    name: "Pasta",
    image: "Pasta.png",
    description: "Creamy pasta with mushrooms and cheese.",
    restaurant: "Italiano",
    price: 350,
  },
];

function FastFood() {
  const [filterPrice, setFilterPrice] = useState("");

  const handleFilterChange = (e) => {
    setFilterPrice(e.target.value);
  };

  const handleOrderClick = () => {
    alert("To order please login/sign up");
  };

  const filteredFoods = foods.filter(
    (food) => !filterPrice || food.price <= parseInt(filterPrice)
  );

  return (
    <div className="fast-food-page">
      <div className="header">
        <h1>Fast Food</h1>
        <div className="filter">
          <label>Filter by Price: </label>
          <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="100">Up to 100</option>
            <option value="200">Up to 200</option>
            <option value="300">Up to 300</option>
            <option value="400">Up to 400</option>
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
              <p className="restaurant-name">Restaurant: {food.restaurant}</p>
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

export default FastFood;
