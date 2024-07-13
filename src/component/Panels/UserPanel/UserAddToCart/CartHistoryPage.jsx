import React, { useState } from "react";
import "./CartHistoryPage.css";
import cheeseburgerImage from "../../../../Assets/home-banner-image.png"; // Example image imports
import friesImage from "../../../../Assets/home-banner-image.png";
import sodaImage from "../../../../Assets/home-banner-image.png";
import UserHeader from "../../../Layout/UserHeaders";

const CartHistoryPage = () => {
  // Dummy data for demonstration
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      itemName: "Cheeseburger",
      price: 5.99,
      quantity: 2,
      image: cheeseburgerImage,
    },
    {
      id: 2,
      itemName: "French Fries",
      price: 2.49,
      quantity: 1,
      image: friesImage,
    },
    { id: 3, itemName: "Soda", price: 1.99, quantity: 3, image: sodaImage },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <UserHeader />
      <div className="cart-history-page">
        <h2>Cart History</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart history.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="item-image"
                    />
                  </td>
                  <td>{item.itemName}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CartHistoryPage;
