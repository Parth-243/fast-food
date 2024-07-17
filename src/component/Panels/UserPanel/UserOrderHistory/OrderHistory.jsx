import React, { useState } from "react";
import "./OrderHistory.css";
import UserHeader from "../../../Layout/UserHeaders";

const OrderHistory = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const orders = [
    {
      id: 1,
      foodName: "Burger",
      foodIngredients: "Beef, Lettuce, Tomato, Cheese",
      restaurantName: "Fast Food Hub",
      price: "$8.99",
      image: "burger.png",
    },
    {
      id: 2,
      foodName: "Pizza",
      foodIngredients: "Pepperoni, Cheese, Tomato Sauce",
      restaurantName: "Pizza Palace",
      price: "$12.99",
      image: "pizza.png",
    },
    {
      id: 3,
      foodName: "Fries",
      foodIngredients: "Potatoes, Salt, Oil",
      restaurantName: "Snack Shack",
      price: "$3.99",
      image: "fries.png",
    },
  ];

  const handleBuyAgainClick = (order) => {
    setSelectedFood(order);
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

  return (
    <>
      <UserHeader />
      <div className="order-history">
        {orders.map((order) => (
          <div key={order.id} className="order-item-flex-box">
            <div className="order-item">
              <div className="order-details">
                <div className="food-name">{order.foodName}</div>
                <div className="food-ingredients">{order.foodIngredients}</div>
                <div className="restaurant-name">{order.restaurantName}</div>
                <div className="price">{order.price}</div>
              </div>
              <div className="order-actions">
                <button
                  className="buy-again"
                  onClick={() => handleBuyAgainClick(order)}
                >
                  Buy again
                </button>
              </div>
            </div>
            <div className="img-placeholder">
              <img src="burger.png" />
            </div>
          </div>
        ))}
      </div>

      {selectedFood && (
        <div className="popup">
          <div className="popup-content">
            <img
              src={selectedFood.image}
              alt={selectedFood.foodName}
              className="popup-image"
            />
            <div className="popup-details">
              <h2 className="popup-food-name">{selectedFood.foodName}</h2>
              <p className="popup-restaurant-name">
                Restaurant: {selectedFood.restaurantName}
              </p>
              <p className="popup-food-ingredients">
                Ingredients: {selectedFood.foodIngredients}
              </p>
              <p className="popup-food-price">
                <b>Price:</b> {selectedFood.price}
              </p>
              <div className="quantity-control">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <div className="popup-buttons">
                <button
                  className="popup-buy-button"
                  onClick={handleBuyNowClick}
                >
                  Buy Now
                </button>
                <button
                  className="popup-cancel-button"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderHistory;
