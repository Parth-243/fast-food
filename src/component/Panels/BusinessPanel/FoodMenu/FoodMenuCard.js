// import React from "react";
// import "./FoodMenuCard.css";

// const FoodMenuCard = ({ food, onEdit, onRemove }) => {
//   return (
//     <div className="food-menu-card">
//       <img src={food.image} alt={food.foodItem} className="food-image" />
//       <div className="food-details">
//         <h3>{food.foodItem}</h3>
//         <p>
//           <strong>Category:</strong> {food.category}
//         </p>
//         <p>
//           <strong>Ingredients:</strong> {food.ingredients}
//         </p>
//         <p>
//           <strong>Price:</strong> ${food.price}
//         </p>
//         <div className="food-menu-card-buttons">
//           <button onClick={() => onEdit(food)}>Edit</button>
//           <button onClick={() => onRemove(food.id)}>Remove</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodMenuCard;
import React from "react";
import PropTypes from "prop-types";
import "./FoodMenuCard.css"; // Ensure you have the CSS file for FoodMenuCard styles

const FoodMenuCard = ({ food, onEdit, onRemove }) => {
  return (
    <div className="food-menu-card">
      <img src={food.image} alt={food.foodItem} />
      <div className="food-menu-card-body">
        <h3>{food.foodItem}</h3>
        <p>{food.ingredients}</p>
        <p className="price">${food.price}</p>
        <div className="btn-group">
          <button className="btn-edit" onClick={() => onEdit(food)}>
            Edit
          </button>
          <button className="btn-remove" onClick={() => onRemove(food.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

FoodMenuCard.propTypes = {
  food: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FoodMenuCard;
