import React, { useState } from "react";
import Style from "./UserRestaurantPage.module.css"; // Importing the CSS file with named import
import UserHeader from "../../../Layout/UserHeaders";

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
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleCategoryFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setFilterPrice(e.target.value);
  };

  const handleOrderClick = (food) => {
    setSelectedFood(food);
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
  };

  const handleBuyNowClick = () => {
    alert("Purchase successful!");
    setSelectedFood(null);
    setQuantity(1);
  };

  const handleCancelClick = () => {
    setSelectedFood(null);
    setQuantity(1);
  };

  const filteredFoods = foods.filter(
    (food) =>
      (!filterCategory || food.category === filterCategory) &&
      (!filterPrice || food.price <= parseInt(filterPrice))
  );

  const uniqueCategories = [...new Set(foods.map((food) => food.category))];

  return (
    <>
      <UserHeader />
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
                    onClick={() => handleOrderClick(food)}
                  >
                    Buy
                  </button>
                  <button className={Style["add-button"]}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedFood && (
          <div className={Style["popup"]}>
            <div className={Style["popup-content"]}>
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                className={Style["popup-image"]}
              />
              <div className={Style["popup-details"]}>
                <h2 className={Style["popup-food-name"]}>
                  {selectedFood.name}
                </h2>
                <p className={Style["popup-restaurant-name"]}>
                  Restaurant: {restaurantName}
                </p>
                <p className={Style["popup-food-description"]}>
                  {selectedFood.description}
                </p>
                <p className={Style["popup-food-price"]}>
                  Price: ₹{selectedFood.price}
                </p>
                <div className={Style["quantity-control"]}>
                  <button
                    className={Style["quantity-button"]}
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <span className={Style["quantity"]}>{quantity}</span>
                  <button
                    className={Style["quantity-button"]}
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
                <div className={Style["popup-buttons"]}>
                  <button
                    className={Style["popup-buy-button"]}
                    onClick={handleBuyNowClick}
                  >
                    Buy Now
                  </button>
                  <button
                    className={Style["popup-cancel-button"]}
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserRestaurantPage;
