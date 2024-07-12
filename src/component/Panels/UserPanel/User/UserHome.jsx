import React from "react";
import "./UserHome.css";

function UserHome() {
  const foodItems = [
    {
      name: "Cheeseburger",
      restaurant: "Burger King",
      price: "$5.99",
      imageUrl: "ham.jpg",
    },
    {
      name: "Fried Chicken",
      restaurant: "KFC",
      price: "$6.99",
      imageUrl: "chicken.jpg",
    },
    {
      name: "Cheese Pizza",
      restaurant: "Pizza Hut",
      price: "$7.99",
      imageUrl: "cheese.jpg",
    },
    {
      name: "Vegetable Salad",
      restaurant: "Subway",
      price: "$4.99",
      imageUrl: "login.jpg",
    },
  ];

  const restaurants = [
    {
      name: "Burger King",
      location: "New York",
      imageUrl: "alfresco-seating.jpg",
    },
    { name: "KFC", location: "California", imageUrl: "lily.jpg" },
    { name: "Pizza Hut", location: "Texas", imageUrl: "dominos.jpg" },
    { name: "Subway", location: "Florida", imageUrl: "syah.jpg" },
  ];

  return (
    <div className="food-page">
      <div className="user-info">
        <div className="user-name-box">
          <h2>User Page</h2>
        </div>
        <div className="user-img-box">
          <img src="digvijay.png" alt="User" />
        </div>
      </div>
      <div className="foods-section">
        <h2>Foods</h2>
        <div className="food-items">
          {foodItems.map((item, index) => (
            <div className="food-item" key={index}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.restaurant}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="restaurants-section">
        <h2>Restaurants</h2>
        <div className="restaurant-items">
          {restaurants.map((item, index) => (
            <div className="restaurant-item" key={index}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
