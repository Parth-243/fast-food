import React from "react";
import "./OrderHistory.css";
import UserHeader from "../../../Layout/UserHeaders";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      foodName: "Burger",
      foodIngredients: "Beef, Lettuce, Tomato, Cheese",
      restaurantName: "Fast Food Hub",
      price: "$8.99",
    },
    {
      id: 2,
      foodName: "Pizza",
      foodIngredients: "Pepperoni, Cheese, Tomato Sauce",
      restaurantName: "Pizza Palace",
      price: "$12.99",
    },
    {
      id: 3,
      foodName: "Fries",
      foodIngredients: "Potatoes, Salt, Oil",
      restaurantName: "Snack Shack",
      price: "$3.99",
    },
  ];

  return (
    <>
      <UserHeader />
      <div className="order-history">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-details">
              <div className="food-name">{order.foodName}</div>
              <div className="food-ingredients">{order.foodIngredients}</div>
              <div className="restaurant-name">{order.restaurantName}</div>
              <div className="price">{order.price}</div>
            </div>
            <button className="buy-again">Buy again</button>
            <div className="img-placeholder">img</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderHistory;
