// import React, { useState } from "react";
// import Style from "./UserFoodItem.module.css"; // Importing the CSS file with named import
// import UserHeader from "../../../Layout/UserHeaders";

// const foods = [
//   {
//     name: "Burger",
//     image: "burger.png",
//     description: "Delicious beef burger with fresh vegetables.",
//     restaurant: "Burger Farm",
//     price: 200,
//   },
//   {
//     name: "Pizza",
//     image: "pizza.png",
//     description: "Cheesy pizza with pepperoni and olives.",
//     restaurant: "Pizza Hut",
//     price: 300,
//   },
//   {
//     name: "French Fries",
//     image: "french_fries.png",
//     description: "Crispy french fries with a side of ketchup.",
//     restaurant: "Fizzy Fizz",
//     price: 100,
//   },
//   {
//     name: "Noodles",
//     image: "noodles.png",
//     description: "Stir-fried noodles with vegetables and chicken.",
//     restaurant: "Chinese Delight",
//     price: 250,
//   },
//   {
//     name: "Dessert",
//     image: "dessert.png",
//     description: "Sweet dessert to end your meal on a high note.",
//     restaurant: "Sweet Treats",
//     price: 150,
//   },
//   {
//     name: "Soft Drink",
//     image: "soft_drink.png",
//     description: "Refreshing soft drink to quench your thirst.",
//     restaurant: "Cool Drinks",
//     price: 50,
//   },
//   {
//     name: "Pasta",
//     image: "Pasta.png",
//     description: "Creamy pasta with mushrooms and cheese.",
//     restaurant: "Italiano",
//     price: 350,
//   },
// ];

// function UserFoodItem() {
//   const [filterPrice, setFilterPrice] = useState("");

//   const handleFilterChange = (e) => {
//     setFilterPrice(e.target.value);
//   };

//   const handleOrderClick = () => {
//     alert("To order please login/sign up");
//   };

//   const category = "Fast Food"; // Replace with dynamic category name

//   const filteredFoods = foods.filter(
//     (food) => !filterPrice || food.price <= parseInt(filterPrice)
//   );

//   return (
//     <>
//       <UserHeader />
//       <div className={Style["fast-food-page"]}>
//         <div className={Style["header"]}>
//           <h1>{category}</h1>
//           <div className={Style["filter"]}>
//             <label>Filter by Price: </label>
//             <select onChange={handleFilterChange}>
//               <option value="">All</option>
//               <option value="100">Up to 100</option>
//               <option value="200">Up to 200</option>
//               <option value="300">Up to 300</option>
//               <option value="400">Up to 400</option>
//             </select>
//           </div>
//         </div>
//         <div className={Style["food-container"]}>
//           {filteredFoods.map((food, index) => (
//             <div className={Style["food-card"]} key={index}>
//               <img
//                 src={food.image}
//                 alt={food.name}
//                 className={Style["food-image"]}
//               />
//               <div className={Style["food-details"]}>
//                 <h2 className={Style["food-name"]}>{food.name}</h2>
//                 <p className={Style["food-description"]}>{food.description}</p>
//                 <p className={Style["restaurant-name"]}>
//                   Restaurant: {food.restaurant}
//                 </p>
//                 <p className={Style["food-price"]}>Price: ₹{food.price}</p>
//                 <div className={Style["button-container"]}>
//                   <button
//                     className={Style["order-button"]}
//                     onClick={handleOrderClick}
//                   >
//                     Buy
//                   </button>
//                   <button className={Style["add-button"]}>Add</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserFoodItem;

import React, { useState } from "react";
import Style from "./UserFoodItem.module.css"; // Importing the CSS file with named import
import UserHeader from "../../../Layout/UserHeaders";

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

function UserFoodItem() {
  const [filterPrice, setFilterPrice] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleFilterChange = (e) => {
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

  const category = "Fast Food"; // Replace with dynamic category name

  const filteredFoods = foods.filter(
    (food) => !filterPrice || food.price <= parseInt(filterPrice)
  );

  return (
    <>
      <UserHeader />
      <div className={Style["fast-food-page"]}>
        <div className={Style["header"]}>
          <h1>{category}</h1>
          <div className={Style["filter"]}>
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
        <div className={Style["food-container"]}>
          {filteredFoods.map((food, index) => (
            <div className={Style["food-card"]} key={index}>
              <img
                src={food.image}
                alt={food.name}
                className={Style["food-image"]}
              />
              <div className={Style["food-details"]}>
                <h2 className={Style["food-name"]}>{food.name}</h2>
                <p className={Style["food-description"]}>{food.description}</p>
                <p className={Style["restaurant-name"]}>
                  Restaurant: {food.restaurant}
                </p>
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
                  {selectedFood.restaurant}
                </p>
                <p className={Style["popup-restaurant-name"]}>
                  {selectedFood.description}
                </p>
                <p className={Style["popup-food-price"]}>
                  <b>Price:</b> ₹{selectedFood.price}
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

export default UserFoodItem;
