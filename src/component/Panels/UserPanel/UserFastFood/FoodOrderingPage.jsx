// import React, { useState, useEffect } from "react";
// import "./FoodOrderingPage.css";
// import UserHeader from "../../../Layout/UserHeaders";

// const quotes = ["Delicious!", "Tasty Treats!", "Yummy!"];

// const getRandomQuote = () => {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// };

// const foodItemsData = [
//   {
//     id: 1,
//     imgSrc: "cheese.jpg",
//     name: "Cheese Burger",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$10",
//   },
//   {
//     id: 2,
//     imgSrc: "food2.jpg",
//     name: "Food Name 2",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$12",
//   },
//   {
//     id: 3,
//     imgSrc: "food3.jpg",
//     name: "Food Name 3",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$15",
//   },
//   {
//     id: 4,
//     imgSrc: "food4.jpg",
//     name: "Food Name 4",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$8",
//   },
//   {
//     id: 5,
//     imgSrc: "food5.jpg",
//     name: "Food Name 5",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$11",
//   },
//   {
//     id: 6,
//     imgSrc: "food6.jpg",
//     name: "Food Name 6",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$9",
//   },
//   {
//     id: 7,
//     imgSrc: "food7.jpg",
//     name: "Food Name 7",
//     ingredients: "Ingredient 1, Ingredient 2",
//     price: "$14",
//   },
// ];

// const FoodOrderingPage = () => {
//   const [quote, setQuote] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [foodItems, setFoodItems] = useState(foodItemsData);

//   useEffect(() => {
//     setQuote(getRandomQuote());
//   }, []);

//   const handleBuyNowClick = (item) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedItem(null);
//     setQuantity(1);
//   };

//   const handleQuantityChange = (increment) => {
//     setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
//   };

//   const handleBuyNow = () => {
//     console.log(`Bought ${selectedItem.name} with quantity ${quantity}`);
//     closeModal();
//   };

//   const handleAddToCart = (item) => {
//     console.log(`Added ${item.name} to cart!`);
//   };

//   return (
//     <>
//       <UserHeader />
//       <div className="cont">
//         <div className="container">
//           <div className="main-banner">
//             <h2>Different Food Category</h2>
//             <img src="food-image.jpg" alt="Food" className="food-img" />
//           </div>

//           <section className="food-category">
//             <div className="food-itemss">
//               {foodItems.map((item, index) => (
//                 <div className="food-item" key={index}>
//                   <img src={item.imgSrc} alt={item.name} />
//                   <div className="food-info">
//                     <p>{item.name}</p>
//                     <p>{item.ingredients}</p>
//                     <p>{item.price}</p>
//                   </div>
//                   <div className="buttons">
//                     <button
//                       className="buy-now"
//                       onClick={() => handleBuyNowClick(item)}
//                     >
//                       Buy Now
//                     </button>
//                     <button
//                       className="add-to-cart"
//                       onClick={() => handleAddToCart(item)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {modalVisible && selectedItem && (
//             <div className={`modal ${modalVisible ? "show" : ""}`}>
//               <div className="modal-contents">
//                 <span className="close" onClick={closeModal}>
//                   &times;
//                 </span>
//                 <img src={selectedItem.imgSrc} alt={selectedItem.name} />
//                 <h2>{selectedItem.name}</h2>
//                 <p>{selectedItem.ingredients}</p>
//                 <p>{selectedItem.price}</p>
//                 <div className="quantity-control">
//                   <button onClick={() => handleQuantityChange(-1)}>-</button>
//                   <input type="text" value={quantity} readOnly />
//                   <button onClick={() => handleQuantityChange(1)}>+</button>
//                 </div>
//                 <div className="modal-buttons">
//                   <button className="buy-now" onClick={handleBuyNow}>
//                     Buy
//                   </button>
//                   <button className="cancel" onClick={closeModal}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodOrderingPage;
// //

import React, { useState, useEffect } from "react";
import "./FoodOrderingPage.css";
import UserHeader from "../../../Layout/UserHeaders";

const quotes = ["Delicious!", "Tasty Treats!", "Yummy!"];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Dummy data to simulate fetching from the backend
const categoriesData = [
  {
    id: 1,
    name: "Burgers",
    foodItems: [
      {
        id: 1,
        imgSrc: "cheese.jpg",
        name: "Cheese Burger",
        ingredients: "Ingredient 1, Ingredient 2",
        price: "$10",
      },
      {
        id: 2,
        imgSrc: "burger2.jpg",
        name: "Chicken Burger",
        ingredients: "Ingredient 1, Ingredient 2",
        price: "$12",
      },
    ],
  },
  {
    id: 2,
    name: "Pizzas",
    foodItems: [
      {
        id: 3,
        imgSrc: "pizza1.jpg",
        name: "Margherita ",
        ingredients: "Ingredient 1, Ingredient 2",
        price: "$15",
      },
      {
        id: 4,
        imgSrc: "pizza2.jpg",
        name: "Pepperoni Pizza",
        ingredients: "Ingredient 1, Ingredient 2",
        price: "$18",
      },
    ],
  },
  {
    id: 3,
    name: "Drinks",
    foodItems: [
      {
        id: 5,
        imgSrc: "drink1.jpg",
        name: "Coke",
        ingredients: "Ingredient 1, Ingredient 2",
        price: "$3",
      },
      {
        id: 6,
        imgSrc: "drink2.jpg",
        name: "Lemonade",
        ingredients: "Ingredient 1, Ingredient 2",
        price: "$4",
      },
    ],
  },
];

const FoodOrderingPage = () => {
  const [quote, setQuote] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState(categoriesData);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const handleBuyNowClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
    setQuantity(1);
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
  };

  const handleBuyNow = () => {
    console.log(`Bought ${selectedItem.name} with quantity ${quantity}`);
    closeModal();
  };

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart!`);
  };

  return (
    <>
      <UserHeader />
      <div className="food-ordering-page">
        <div className="container">
          <div className="main-banner">
            <h2>Different Food Categories</h2>
            <p>{quote}</p>
          </div>

          {categories.map((category) => (
            <section key={category.id} className="food-category">
              <h3>{category.name}</h3>
              <div className="food-items">
                {category.foodItems.map((item) => (
                  <div className="food-card" key={item.id}>
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="food-image"
                    />
                    <div className="food-details">
                      <h4>{item.name}</h4>
                      <p>{item.ingredients}</p>
                      <p className="food-price">{item.price}</p>
                      <div className="food-buttons">
                        <button
                          className="buy-now-button"
                          onClick={() => handleBuyNowClick(item)}
                        >
                          Buy
                        </button>
                        <button
                          className="add-to-cart-button"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {modalVisible && selectedItem && (
            <div className={`modal ${modalVisible ? "show" : ""}`}>
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <img src={selectedItem.imgSrc} alt={selectedItem.name} />
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.ingredients}</p>
                <p>{selectedItem.price}</p>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <div className="modal-buttons">
                  <button className="buy-now-button" onClick={handleBuyNow}>
                    Buy
                  </button>
                  <button className="cancel-button" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodOrderingPage;
