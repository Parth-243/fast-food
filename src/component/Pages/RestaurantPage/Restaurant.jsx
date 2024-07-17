import React, { useState } from "react";
import Style from "./Restaurant.module.css"; // Importing the CSS file with named import

const restaurantName = "My Restaurant";

const foods = [
  {
    category: "Burgers",
    name: "Burger",
    image: "burger.png",
    description: "Delicious beef burger with fresh vegetables.",
    price: 200,
  },
  {
    category: "Pizzas",
    name: "Pizza",
    image: "pizza.png",
    description: "Cheesy pizza with pepperoni and olives.",
    price: 300,
  },
  {
    category: "Sides",
    name: "French Fries",
    image: "french_fries.png",
    description: "Crispy french fries with a side of ketchup.",
    price: 100,
  },
  {
    category: "Noodles",
    name: "Noodles",
    image: "noodles.png",
    description: "Stir-fried noodles with vegetables and chicken.",
    price: 250,
  },
  {
    category: "Desserts",
    name: "Dessert",
    image: "dessert.png",
    description: "Sweet dessert to end your meal on a high note.",
    price: 150,
  },
  {
    category: "Drinks",
    name: "Soft Drink",
    image: "soft_drink.png",
    description: "Refreshing soft drink to quench your thirst.",
    price: 50,
  },
  {
    category: "Pasta",
    name: "Pasta",
    image: "pasta.png",
    description: "Creamy pasta with mushrooms and cheese.",
    price: 350,
  },
];

function UserRestaurantPage() {
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const handleCategoryFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setFilterPrice(e.target.value);
  };

  const handleOrderClick = () => {
    alert("To Buy, first Login/Signin");
  };

  const handleAddClick = () => {
    alert("To Add in Cart, first Login/Signin");
  };

  const filteredFoods = foods.filter(
    (food) =>
      (!filterCategory || food.category === filterCategory) &&
      (!filterPrice || food.price <= parseInt(filterPrice))
  );

  const uniqueCategories = [...new Set(foods.map((food) => food.category))];

  return (
    <div className={Style["restaurant-page"]}>
      <div className={Style["header"]}>
        <h1>{restaurantName}</h1>
        <div className={Style["filters"]}>
          <label>Filter by Category: </label>
          <select onChange={handleCategoryFilterChange}>
            <option value="">All</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label>Filter by Price: </label>
          <select onChange={handlePriceFilterChange}>
            <option value="">All</option>
            <option value="100">Up to 100</option>
            <option value="200">Up to 200</option>
            <option value="300">Up to 300</option>
            <option value="400">Up to 400</option>
          </select>
        </div>
      </div>
      <div className={Style["food-container"]}>
        {filteredFoods.map((food, index) => (
          <div className={Style["food-card"]} key={index}>
            <img
              src={food.image}
              alt={food.name}
              className={Style["food-image"]}
            />
            <div className={Style["food-details"]}>
              <h2 className={Style["food-category"]}>{food.category}</h2>
              <h3 className={Style["food-name"]}>{food.name}</h3>
              <p className={Style["food-description"]}>{food.description}</p>
              <p className={Style["food-price"]}>Price: ₹{food.price}</p>
              <div className={Style["button-container"]}>
                <button
                  className={Style["order-button"]}
                  onClick={handleOrderClick}
                >
                  Buy
                </button>
                <button
                  className={Style["add-button"]}
                  onClick={handleAddClick}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserRestaurantPage;
