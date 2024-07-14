import React, { useState, useEffect } from "react";
import "./Admin.css";
import AdminHeader from "../../Layout/adminHeader";

const Admin = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [foodCategory, setFoodCategory] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodImage, setFoodImage] = useState(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [categoriesResponse, customersResponse, restaurantsResponse] = await Promise.all([
        fetch("http://localhost:4000/admin/food-categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
        fetch("http://localhost:4000/admin/users/customers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
        fetch("http://localhost:4000/admin/restaurants", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
      ]);

      if (!categoriesResponse.ok || !customersResponse.ok || !restaurantsResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const [categoriesData, customersData, restaurantsData] = await Promise.all([
        categoriesResponse.json(),
        customersResponse.json(),
        restaurantsResponse.json(),
      ]);

      setFoodCategories(categoriesData);
      setCustomers(customersData);
      setRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching initial data", error);
    }
  };

  const handleRemoveRestaurant = async (restaurantId) => {
    try {
      const response = await fetch(`http://localhost:4000/admin/restaurants/${restaurantId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setRestaurants(restaurants.filter((restaurant) => restaurant._id !== restaurantId));
    } catch (error) {
      console.error("Error removing restaurant", error);
    }
  };

  const handleRemoveCustomer = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:4000/admin/users/customers/${customerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setCustomers(customers.filter((customer) => customer._id !== customerId));
    } catch (error) {
      console.error("Error removing customer", error);
    }
  };

  const handleRemoveCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:4000/admin/food-categories/${categoryId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setFoodCategories(foodCategories.filter((category) => category._id !== categoryId));
    } catch (error) {
      console.error("Error removing category", error);
    }
  };

  const handleEditCategory = async (category) => {
    const updatedName = prompt("Enter new name:", category.name);
    const updatedDescription = prompt("Enter new description:", category.description);

    if (updatedName && updatedDescription) {
      try {
        const response = await fetch(`http://localhost:4000/admin/food-categories/${category._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name: updatedName, description: updatedDescription }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const updatedCategory = await response.json();
        const updatedCategories = foodCategories.map((cat) =>
          cat._id === category._id ? updatedCategory : cat
        );
        setFoodCategories(updatedCategories);
      } catch (error) {
        console.error("Error editing category", error);
      }
    }
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();
    if (!foodCategory || !foodImage || !foodDescription) {
      alert("Please enter a category name, description, and upload an image.");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/admin/food-categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name: foodCategory, description: foodDescription }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newCategory = await response.json();

      const formData = new FormData();
      formData.append("file", foodImage);

      const uploadResponse = await fetch(`http://localhost:4000/admin/food-categories/picture/${newCategory._id}`, {
        method: "POST",
        headers: {
          // Do not set Content-Type when using FormData
        },
        credentials: "include",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedCategory = await uploadResponse.json();
      setFoodCategories([...foodCategories, updatedCategory]);
      setFoodCategory("");
      setFoodDescription("");
      setFoodImage(null);
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-page">
        <div className="section">
          <h1>Add Food Category</h1>
          <div className="sub-section">
            <form className="add-category-form" onSubmit={handleAddCategory}>
              <div className="form-group">
                <label htmlFor="category">Category Name</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={foodCategory}
                  onChange={(e) => setFoodCategory(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Category Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={foodDescription}
                  onChange={(e) => setFoodDescription(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Category Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setFoodImage(e.target.files[0])}
                  required
                />
              </div>
              <button type="submit" className="add-button">
                Add Category
              </button>
            </form>
            {foodCategories.length > 0 && (
              <table className="admin-table1">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {foodCategories.map((category) => (
                    <tr key={category._id}>
                      <td>
                        <img
                          src={category.picture}
                          alt={category.name}
                          className="table-image"
                        />
                      </td>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <button
                          className="edit-button"
                          onClick={() => handleEditCategory(category)}
                        >
                          Edit
                        </button>
                        <button
                          className="remove-button"
                          onClick={() => handleRemoveCategory(category._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="section">
          <h1>Customer Users</h1>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer._id}>
                  <td>
                    {customer.picture ? (
                      <img
                        src={customer.picture}
                        alt={customer.username}
                        className="table-image"
                      />
                    ) : (
                      <div className="placeholder-image">No Image</div>
                    )}
                  </td>
                  <td>{customer.username}</td>
                  <td>{customer.email}</td>
                  <td>{customer.mobile || "N/A"}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveCustomer(customer._id)}
                    >
                      Remove Customer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="section">
          <h1>Restaurants</h1>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant._id}>
                  <td>
                    {restaurant.picture ? (
                      <img
                        src={restaurant.picture}
                        alt={restaurant.name}
                        className="table-image"
                      />
                    ) : (
                      <div className="placeholder-image">No Image</div>
                    )}
                  </td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.postalCode}</td>
                  <td>{restaurant.mobile}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveRestaurant(restaurant._id)}
                    >
                      Remove Restaurant
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
