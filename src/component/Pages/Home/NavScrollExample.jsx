// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Rating from "react-rating-stars-component";
// import "./NavScrollExample.css";

// const topRestaurants = [
//   {
//     name: "Alfresco Seating",
//     image: "alfresco-seating.jpg",
//     link: "https://example.com/alfresco-seating",
//     title: "Alfresco Seating",
//     description: "Enjoy outdoor dining with a beautiful view.",
//   },
//   {
//     name: "Aravali Rooftop Restaurant",
//     image: "aravali-rooftop-restaurant.jpg",
//     link: "https://example.com/aravali-rooftop",
//     title: "Aravali Rooftop",
//     description: "Experience fine dining with a rooftop view.",
//   },
//   {
//     name: "Lily",
//     image: "lily.jpg",
//     link: "https://example.com/lily",
//     title: "Lily Restaurant",
//     description: "A cozy place with delicious food.",
//   },
//   {
//     name: "Medi Pe Cafe",
//     image: "medi_pe_cafe.jpg",
//     link: "https://example.com/medi-pe-cafe",
//     title: "Medi Pe Cafe",
//     description: "A cafe with a Mediterranean touch.",
//   },
//   {
//     name: "Myra",
//     image: "myra.jpg",
//     link: "/myra-details",
//     title: "Myra",
//     description: "Elegant dining experience.",
//   },
//   {
//     name: "Raj Bagh",
//     image: "raj_bagh.jpg",
//     link: "https://example.com/raj-bagh",
//     title: "Raj Bagh",
//     description: "Traditional Indian cuisine.",
//   },
//   {
//     name: "Syah",
//     image: "syah.jpg",
//     link: "https://example.com/syah",
//     title: "Syah",
//     description: "Modern dining with a twist.",
//   },
//   {
//     name: "Zenith Terrace",
//     image: "Zenith-terrace-with-sun.jpg",
//     link: "https://example.com/zenith-terrace",
//     title: "Zenith Terrace",
//     description: "Terrace dining with a stunning sunset view.",
//   },
// ];

// const natrajs = [
//   {
//     name: "Natraj",
//     image: "natraj.jpeg",
//     price: 200,
//     rating: 4.5,
//     cuisine: "Indian",
//   },
//   {
//     name: "Dominos",
//     image: "natraj.jpeg",
//     price: 500,
//     rating: 3.5,
//     cuisine: "Indian",
//   },
//   {
//     name: "Pizza Hut",
//     image: "natraj.jpeg",
//     price: 300,
//     rating: 4.0,
//     cuisine: "Indian",
//   },
//   {
//     name: "Fizzy Fizz",
//     image: "natraj.jpeg",
//     price: 300,
//     rating: 4.2,
//     cuisine: "Indian",
//   },
//   {
//     name: "Nothing Before Coffee",
//     image: "natraj.jpeg",
//     price: 500,
//     rating: 4.8,
//     cuisine: "Indian",
//   },
//   {
//     name: "Burger Farm",
//     image: "natraj.jpeg",
//     price: 200,
//     rating: 4.1,
//     cuisine: "Indian",
//   },
//   {
//     name: "RK Chinese",
//     image: "natraj.jpeg",
//     price: 300,
//     rating: 3.8,
//     cuisine: "Indian",
//   },
//   {
//     name: "",
//     image: "natraj.jpeg",
//     price: 500,
//     rating: 4.6,
//     cuisine: "Indian",
//   },
// ];

// const foodCategories = [
//   { name: "Pizza", image: "pizza.png" },
//   { name: "Burger", image: "burger.png" },
//   { name: "French Fries", image: "french_fries.png" },
//   { name: "Noodles", image: "noodles.png" },
//   { name: "Dessert", image: "dessert.png" },
//   { name: "Soft Drink", image: "soft_drink.png" },
//   { name: "Pasta", image: "Pasta.png" },
// ];

// const randomQuotes = [
//   "Food is the ingredient that binds us together.",
//   "Good food is all the sweeter when shared with good friends.",
//   "Life is uncertain. Eat dessert first.",
//   "People who love to eat are always the best people.",
//   "Food is not just eating energy. It’s an experience.",
// ];

// function NavScrollExample() {
//   const [sortOption, setSortOption] = useState("");
//   const [filterOptions, setFilterOptions] = useState({
//     price: "",
//     rating: "",
//     cuisine: "",
//   });

//   const handleSort = (option) => {
//     setSortOption(option);
//   };

//   const handleFilter = (option, category) => {
//     setFilterOptions((prevOptions) => ({
//       ...prevOptions,
//       [category]: option,
//     }));
//   };

//   const sortedAndFilterednatrajs = natrajs
//     .filter((natraj) => {
//       if (
//         filterOptions.price &&
//         natraj.price.toString() !== filterOptions.price
//       )
//         return false;
//       if (
//         filterOptions.rating &&
//         natraj.rating < parseFloat(filterOptions.rating)
//       )
//         return false;
//       if (filterOptions.cuisine && natraj.cuisine !== filterOptions.cuisine)
//         return false;
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortOption === "price") return a.price - b.price;
//       if (sortOption === "rating") return b.rating - a.rating;
//       return 0;
//     });

//   const randomQuote =
//     randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

//   return (
//     <div className="home">
//       <div className="quote-section">
//         <p className="quote">{randomQuote}</p>
//         <img
//           src="fast_food_combo.png"
//           alt="Fast Food"
//           className="quote-image"
//         />
//       </div>

//       <div className="foodCategory">
//         <h2>Food Categories</h2>
//         <div className="food-slider">
//           {foodCategories.map((category, index) => (
//             <div className="food-category" key={index}>
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="food-image"
//               />
//               <p>{category.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="top-restaurants">
//         <h2>Top Restaurants in Udaipur</h2>
//         <div className="restaurant-grid">
//           {topRestaurants.map((restaurant, index) => (
//             <div className="restaurant-card" key={index}>
//               <Link
//                 to={restaurant.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={restaurant.image}
//                   alt={restaurant.title}
//                   className="restaurant-image"
//                 />
//               </Link>
//               <div className="restaurant-info">
//                 <h3>{restaurant.title}</h3>
//                 <p>{restaurant.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="online-food-delivery">
//         <h2>Restaurants with Online Food Delivery in Udaipur</h2>
//         <div className="filter-sort">
//           <div className="sort">
//             <label>Sort By:</label>
//             <select onChange={(e) => handleSort(e.target.value)}>
//               <option value="">Select</option>
//               <option value="price">Price</option>
//               <option value="rating">Rating</option>
//             </select>
//           </div>
//           <div className="filter">
//             <label>Filter By Price:</label>
//             <select onChange={(e) => handleFilter(e.target.value, "price")}>
//               <option value="">Select</option>
//               <option value="200">200</option>
//               <option value="300">300</option>
//               <option value="500">500</option>
//             </select>
//             <label>Filter By Cuisine:</label>
//             <select onChange={(e) => handleFilter(e.target.value, "cuisine")}>
//               <option value="">Select</option>
//               <option value="Indian">Indian</option>
//               <option value="Chinese">Chinese</option>
//               <option value="Italian">Italian</option>
//             </select>
//           </div>
//         </div>
//         <div className="restaurant-grid">
//           {sortedAndFilterednatrajs.map((natraj, index) => (
//             <div className="restaurant-card" key={index}>
//               <Link
//                 to={`/restaurant/${natraj.name
//                   .toLowerCase()
//                   .replace(" ", "-")}`}
//               >
//                 <img
//                   src={natraj.image}
//                   alt={natraj.name}
//                   className="restaurant-image"
//                 />
//                 <div className="restaurant-info">
//                   <h3>{natraj.name}</h3>
//                   <p>Price: {natraj.price}</p>
//                   <p>Cuisine: {natraj.cuisine}</p>
//                   <Rating
//                     value={natraj.rating}
//                     edit={false}
//                     size={24}
//                     activeColor="#ffd700"
//                   />
//                   <button className="order-button">Order Now</button>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavScrollExample;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";
import "./NavScrollExample.css";

const topRestaurants = [
  {
    name: "Alfresco Seating",
    image: "alfresco-seating.jpg",
    link: "https://example.com/alfresco-seating",
    title: "Alfresco Seating",
    description: "Enjoy outdoor dining with a beautiful view.",
  },
  {
    name: "Aravali Rooftop Restaurant",
    image: "aravali-rooftop-restaurant.jpg",
    link: "https://example.com/aravali-rooftop",
    title: "Aravali Rooftop",
    description: "Experience fine dining with a rooftop view.",
  },
  {
    name: "Lily",
    image: "lily.jpg",
    link: "https://example.com/lily",
    title: "Lily Restaurant",
    description: "A cozy place with delicious food.",
  },
  {
    name: "Medi Pe Cafe",
    image: "medi_pe_cafe.jpg",
    link: "https://example.com/medi-pe-cafe",
    title: "Medi Pe Cafe",
    description: "A cafe with a Mediterranean touch.",
  },
  {
    name: "Myra",
    image: "myra.jpg",
    link: "/myra-details",
    title: "Myra",
    description: "Elegant dining experience.",
  },
  {
    name: "Raj Bagh",
    image: "raj_bagh.jpg",
    link: "https://example.com/raj-bagh",
    title: "Raj Bagh",
    description: "Traditional Indian cuisine.",
  },
  {
    name: "Syah",
    image: "syah.jpg",
    link: "https://example.com/syah",
    title: "Syah",
    description: "Modern dining with a twist.",
  },
  {
    name: "Zenith Terrace",
    image: "Zenith-terrace-with-sun.jpg",
    link: "https://example.com/zenith-terrace",
    title: "Zenith Terrace",
    description: "Terrace dining with a stunning sunset view.",
  },
];

const natrajs = [
  {
    name: "Natraj",
    image: "natraj.jpeg",
    price: 200,
    rating: 4.5,
    cuisine: "Indian",
  },
  {
    name: "Dominos",
    image: "natraj.jpeg",
    price: 500,
    rating: 3.5,
    cuisine: "Indian",
  },
  {
    name: "Pizza Hut",
    image: "natraj.jpeg",
    price: 300,
    rating: 4.0,
    cuisine: "Indian",
  },
  {
    name: "Fizzy Fizz",
    image: "natraj.jpeg",
    price: 300,
    rating: 4.2,
    cuisine: "Indian",
  },
  {
    name: "Nothing Before Coffee",
    image: "natraj.jpeg",
    price: 500,
    rating: 4.8,
    cuisine: "Indian",
  },
  {
    name: "Burger Farm",
    image: "natraj.jpeg",
    price: 200,
    rating: 4.1,
    cuisine: "Indian",
  },
  {
    name: "RK Chinese",
    image: "natraj.jpeg",
    price: 300,
    rating: 3.8,
    cuisine: "Indian",
  },
  {
    name: "",
    image: "natraj.jpeg",
    price: 500,
    rating: 4.6,
    cuisine: "Indian",
  },
];

const foodCategories = [
  { name: "Pizza", image: "pizza.png" },
  { name: "Burger", image: "burger.png" },
  { name: "French Fries", image: "french_fries.png" },
  { name: "Noodles", image: "noodles.png" },
  { name: "Dessert", image: "dessert.png" },
  { name: "Soft Drink", image: "soft_drink.png" },
];

const randomQuotes = [
  "Food is the ingredient that binds us together.",
  "Good food is all the sweeter when shared with good friends.",
  "Life is uncertain. Eat dessert first.",
  "People who love to eat are always the best people.",
  "Food is not just eating energy. It’s an experience.",
];

function NavScrollExample() {
  const [sortOption, setSortOption] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    price: "",
    rating: "",
    cuisine: "",
  });

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilter = (option, category) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));
  };

  const sortedAndFilterednatrajs = natrajs
    .filter((natraj) => {
      if (
        filterOptions.price &&
        natraj.price.toString() !== filterOptions.price
      )
        return false;
      if (
        filterOptions.rating &&
        natraj.rating < parseFloat(filterOptions.rating)
      )
        return false;
      if (filterOptions.cuisine && natraj.cuisine !== filterOptions.cuisine)
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  const randomQuote =
    randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

  return (
    <div className="home">
      <div className="quote-section">
        <p className="quotes">{randomQuote}</p>
        <img
          src="fast_food_combo.jpg"
          alt="Fast Food"
          className="quote-image"
        />
      </div>

      <div className="foodCategory">
        <h2>Food Categories</h2>
        <div className="food-slider">
          {foodCategories.map((category, index) => (
            <div className="food-category" key={index}>
              <Link to="/fastFoodHome">
                <img
                  src={category.image}
                  alt={category.name}
                  className="food-image"
                />
              </Link>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="top-restaurants">
        <h2>Top Restaurants </h2>
        <div className="restaurant-grid">
          {topRestaurants.map((restaurant, index) => (
            <div className="restaurant-card" key={index}>
              <Link
                to={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.title}
                  className="restaurant-image"
                />
              </Link>
              <div className="restaurant-info">
                <h3>{restaurant.title}</h3>
                <p>{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="online-food-delivery">
        <h2>Restaurants with Online Food Delivery in Udaipur</h2>
        <div className="filter-sort">
          <div className="sort">
            <label>Sort By:</label>
            <select onChange={(e) => handleSort(e.target.value)}>
              <option value="">Select</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="filter">
            <label>Filter By Price:</label>
            <select onChange={(e) => handleFilter(e.target.value, "price")}>
              <option value="">Select</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="500">500</option>
            </select>
            <label>Filter By Cuisine:</label>
            <select onChange={(e) => handleFilter(e.target.value, "cuisine")}>
              <option value="">Select</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
        </div>
        <div className="restaurant-grid">
          {sortedAndFilterednatrajs.map((natraj, index) => (
            <div className="restaurant-card" key={index}>
              <Link
                to={`/restaurant/${natraj.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <img
                  src={natraj.image}
                  alt={natraj.name}
                  className="restaurant-image"
                />
                <div className="restaurant-info">
                  <h3>{natraj.name}</h3>
                  <p>Price: {natraj.price}</p>
                  <p>Cuisine: {natraj.cuisine}</p>
                  <Rating
                    value={natraj.rating}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <button className="order-button">Order Now</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
