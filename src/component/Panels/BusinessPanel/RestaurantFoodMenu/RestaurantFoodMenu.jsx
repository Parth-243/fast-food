import React, { useState } from "react";
import styles from "./RestaurantFoodMenu.module.css";
import RestaurantHeader from "../../../Layout/restaurantHeader";

const RestaurantFoodMenu = () => {
  const [restaurants, setRestaurants] = useState([
    {
      name: "Restaurant A",
      foodItems: [
        {
          id: 1,
          name: "Pizza",
          category: "Fast Food",
          description: "Delicious cheese pizza",
          image: "https://via.placeholder.com/150",
          price: 299,
        },
        {
          id: 2,
          name: "Burger",
          category: "Fast Food",
          description: "Juicy beef burger",
          image: "https://via.placeholder.com/150",
          price: 199,
        },
      ],
    },
    {
      name: "Restaurant B",
      foodItems: [
        {
          id: 3,
          name: "Pasta",
          category: "Main Course",
          description: "Creamy Alfredo pasta",
          image: "https://via.placeholder.com/150",
          price: 249,
        },
        {
          id: 4,
          name: "Ice Cream",
          category: "Desserts",
          description: "Vanilla ice cream",
          image: "https://via.placeholder.com/150",
          price: 99,
        },
      ],
    },
  ]);

  const [categories] = useState(["Fast Food", "Main Course", "Desserts"]);
  const [showFoodMenuModal, setShowFoodMenuModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newFoodItem, setNewFoodItem] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
    price: "",
  });
  const [editItem, setEditItem] = useState(null);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFoodItem({ ...newFoodItem, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewFoodItem({
      ...newFoodItem,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      // Update existing item
      const updatedRestaurants = restaurants.map((restaurant) => {
        if (restaurant.name === currentRestaurant) {
          const updatedFoodItems = restaurant.foodItems.map((item) =>
            item.id === editItem.id ? newFoodItem : item
          );
          return { ...restaurant, foodItems: updatedFoodItems };
        }
        return restaurant;
      });
      setRestaurants(updatedRestaurants);
      setEditItem(null);
    } else {
      // Add new item
      const newItem = {
        ...newFoodItem,
        id: Date.now(),
      };
      const updatedRestaurants = restaurants.map((restaurant) => {
        if (restaurant.name === currentRestaurant) {
          return {
            ...restaurant,
            foodItems: [...restaurant.foodItems, newItem],
          };
        }
        return restaurant;
      });
      setRestaurants(updatedRestaurants);
    }

    setShowFoodMenuModal(false);
    setNewFoodItem({
      name: "",
      category: "",
      description: "",
      image: "",
      price: "",
    });
  };

  const handleCancel = () => {
    setShowFoodMenuModal(false);
    setShowEditModal(false);
    setNewFoodItem({
      name: "",
      category: "",
      description: "",
      image: "",
      price: "",
    });
    setEditItem(null);
  };

  const openModal = (restaurantName) => {
    setCurrentRestaurant(restaurantName);
    setShowFoodMenuModal(true);
  };

  const handleEdit = (foodItem) => {
    setEditItem(foodItem);
    setNewFoodItem(foodItem);
    setShowEditModal(true);
    setShowFoodMenuModal(true);
  };

  const handleRemove = (restaurantName, itemId) => {
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.name === restaurantName) {
        const updatedFoodItems = restaurant.foodItems.filter(
          (item) => item.id !== itemId
        );
        return { ...restaurant, foodItems: updatedFoodItems };
      }
      return restaurant;
    });
    setRestaurants(updatedRestaurants);
  };

  return (
    <>
      <RestaurantHeader />
      <div className={styles.restaurantFoodMenu}>
        {restaurants.map((restaurant, index) => (
          <div key={index} className={styles.restaurantSection}>
            <div className={styles.SubrestaurantFoodMenu}>
              <h1 className={styles.restaurantName}>{restaurant.name}</h1>
              <button
                className={styles.createButton}
                onClick={() => openModal(restaurant.name)}
              >
                Create New Food Menu
              </button>
            </div>

            <div className={styles.foodItemsContainer}>
              {restaurant.foodItems.map((foodItem) => (
                <div key={foodItem.id} className={styles.foodItem}>
                  <img
                    src={foodItem.image}
                    alt={foodItem.name}
                    className={styles.foodImage}
                  />
                  <div className={styles.foodDetails}>
                    <h3>{foodItem.name}</h3>
                    <p>Category: {foodItem.category}</p>
                    <p>Restaurant: {restaurant.name}</p>
                    <p>Description: {foodItem.description}</p>
                    <p>Price: ₹{foodItem.price}</p>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(foodItem)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.removeButton}
                      onClick={() => handleRemove(restaurant.name, foodItem.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {showFoodMenuModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>{editItem ? "Edit Food Item" : "Add New Food Item"}</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Food Item Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newFoodItem.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={newFoodItem.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newFoodItem.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="image">Upload Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="price">Price (₹)</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={newFoodItem.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  {editItem ? "Update" : "Submit"}
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantFoodMenu;
