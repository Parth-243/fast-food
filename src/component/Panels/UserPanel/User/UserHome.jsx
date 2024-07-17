import React from "react";
import UserHeader from "../../../Layout/UserHeaders";
import { Link } from "react-router-dom";
import "./UserHome.css";

const foodCategories = [
  { name: "Pizza", image: "pizza.png" },
  { name: "Burger", image: "burger.png" },
  { name: "French Fries", image: "french_fries.png" },
  { name: "Noodles", image: "noodles.png" },
  { name: "Dessert", image: "dessert.png" },
  { name: "Soft Drink", image: "soft_drink.png" },
];

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
    { name: "Pizza Hut", location: "Texas", imageUrl: "dominos.png" },
    { name: "Subway", location: "Florida", imageUrl: "syah.jpg" },
  ];

  return (
    <>
      <UserHeader />
      <div className="user-home-container">
        <div className="user-info">
          <div className="user-name-box">
            <h2>Welcome, User!</h2>
          </div>
          <div className="user-img-box">
            <img src="dummy-img.jpg" alt="User" />
          </div>
        </div>
        <div className="sections-container">
          <div className="user-foods-section">
            <h2>Foods</h2>
            <div className="food-slider">
              {foodCategories.map((category, index) => (
                <div className="food-category" key={index}>
                  <Link to="/UserfooditemPage">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="food-images"
                    />
                  </Link>
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="user-restaurants-section">
            <h2 id="Restaurant-heading">Restaurants</h2>
            <div className="user-restaurant-items">
              {restaurants.map((item, index) => (
                <Link
                  to="/UserRestaurantPage"
                  style={{ textDecoration: "none" }}
                >
                  <div className="user-restaurant-item" key={index}>
                    <img src={item.imageUrl} alt={item.name} />
                    <div className="restaurant-info">
                      <p className="restaurant-name">{item.name}</p>
                      <p className="restaurant-location">{item.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHome;
