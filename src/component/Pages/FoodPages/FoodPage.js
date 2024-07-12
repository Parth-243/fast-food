import React, { useState } from 'react';
import './FoodPage.css';

function FoodPage() {
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleOrderClick = () => {
    const userResponse = window.confirm("Do you want to sign up?");
    if (userResponse) {
      window.location.href = "/signup";
    } else {
      window.location.href = "/login";
    }
  };

  const handleRatingFilterChange = (event) => {
    const value = event.target.value === "All" ? 0 : parseInt(event.target.value, 10);
    setRatingFilter(value);
  };

  const foodItems = [
    { description: "Juicy cheeseburger with fresh lettuce.", rate: 85, imageUrl: "ham.jpg" },
    { description: "Crunchy fried chicken wings", rate: 100, imageUrl: "chicken.jpg" },
    { description: "Crunchy fried chicken wings", rate: 200, imageUrl: "cheesejpg" },
    { description: "Healthy vegetable salad", rate: 175, imageUrl: "https://source.unsplash.com/160x160/?salad" },
    { description: "Classic pepperoni pizza", rate: 125, imageUrl: "https://source.unsplash.com/160x160/?pizza" },
    { description: "Juicy grilled steak", rate: 250, imageUrl: "https://source.unsplash.com/160x160/?steak" },
    { description: "Refreshing fruit smoothie", rate: 85, imageUrl: "https://source.unsplash.com/160x160/?smoothie" },
    { description: "Creamy chocolate cake", rate: 275, imageUrl: "https://source.unsplash.com/160x160/?chocolate-cake" }
  ];

  const filteredFoodItems = foodItems.filter(item => item.rate >= ratingFilter);

  return (
    <div className="food-page">
      <div className="heading-section">
        <h1>Welcome to Our Food Gallery</h1>
      </div>
      <div className="filter-section">
        <label htmlFor="ratingFilter">Filter by Rating:</label>
        <select id="ratingFilter" value={ratingFilter} onChange={handleRatingFilterChange}>
          <option value="All">All</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
        </select>
      </div>
      <div className="food-grid">
        {filteredFoodItems.map((item, index) => (
          <div className="food-item" key={index}>
            <img src={item.imageUrl} alt={`Food ${index + 1}`} />
            <h3>Food {index + 1}</h3>
            <p className="food-description">{item.description}</p>
            <button className="order-button" onClick={handleOrderClick}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodPage;
