// import React, { useState } from "react";
// import FoodMenuCard from "./FoodMenuCard";
// import FoodMenuForm from "./FoodMenuForm";
// import RestaurantHeader from "../../../Layout/restaurantHeader";
// import "./FoodMenuList.css";

// const FoodMenuList = () => {
//   const [foodMenu, setFoodMenu] = useState([
//     // Example data
//     {
//       id: 1,
//       foodItem: "Pizza Margherita",
//       ingredients: "Tomato, Mozzarella, Basil",
//       category: "Pizza",
//       image: "https://example.com/pizza.jpg",
//       price: 10,
//     },
//     {
//       id: 2,
//       foodItem: "Cheeseburger",
//       ingredients: "Beef, Cheese, Lettuce, Tomato",
//       category: "Burger",
//       image: "https://example.com/burger.jpg",
//       price: 8,
//     },
//   ]);
//   const [editingFood, setEditingFood] = useState(null);

//   const handleEdit = (food) => {
//     setEditingFood(food);
//   };

//   const handleRemove = (id) => {
//     setFoodMenu(foodMenu.filter((food) => food.id !== id));
//   };

//   const handleSave = (updatedFood) => {
//     setFoodMenu(
//       foodMenu.map((food) => (food.id === updatedFood.id ? updatedFood : food))
//     );
//     setEditingFood(null);
//   };

//   return (
//     <>
//       <RestaurantHeader />
//       <div className="food-menu-list">
//         {foodMenu.map((food) => (
//           <FoodMenuCard
//             key={food.id}
//             food={food}
//             onEdit={handleEdit}
//             onRemove={handleRemove}
//           />
//         ))}
//         {editingFood && (
//           <FoodMenuForm
//             food={editingFood}
//             onSave={handleSave}
//             onCancel={() => setEditingFood(null)}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default FoodMenuList;
import React, { useState } from "react";
import FoodMenuCard from "./FoodMenuCard";
import FoodMenuForm from "./FoodMenuForm";
import RestaurantHeader from "../../../Layout/restaurantHeader";
import "./FoodMenuList.css";

const FoodMenuList = () => {
  const [foodMenu, setFoodMenu] = useState([
    // Example data
    {
      id: 1,
      foodItem: "Pizza Margherita",
      ingredients: "Tomato, Mozzarella, Basil",
      category: "Pizza",
      image: "https://example.com/pizza.jpg",
      price: 10,
    },
    {
      id: 2,
      foodItem: "Cheeseburger",
      ingredients: "Beef, Cheese, Lettuce, Tomato",
      category: "Burger",
      image: "https://example.com/burger.jpg",
      price: 8,
    },
  ]);
  const [editingFood, setEditingFood] = useState(null);

  const handleEdit = (food) => {
    setEditingFood(food);
  };

  const handleRemove = (id) => {
    setFoodMenu(foodMenu.filter((food) => food.id !== id));
  };

  const handleSave = (updatedFood) => {
    setFoodMenu(
      foodMenu.map((food) => (food.id === updatedFood.id ? updatedFood : food))
    );
    setEditingFood(null);
  };

  return (
    <>
      <RestaurantHeader />
      <div className="food-menu-list">
        {foodMenu.map((food) => (
          <FoodMenuCard
            key={food.id}
            food={food}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
        {editingFood && (
          <FoodMenuForm
            food={editingFood}
            onSave={handleSave}
            onCancel={() => setEditingFood(null)}
          />
        )}
      </div>
    </>
  );
};

export default FoodMenuList;
