import React, { useState } from "react";
import "./Admin.css";
import AdminHeader from "../../Layout/AdminHeader";
const initialRestaurants = [
  {
    name: "Alfresco Seating",
    image: "alfresco-seating.jpg",
    email: "alfresco@example.com",
    phone: "123-456-7890",
  },
  {
    name: "Aravali Rooftop Restaurant",
    image: "aravali-rooftop-restaurant.jpg",
    email: "aravali@example.com",
    phone: "234-567-8901",
  },
  {
    name: "Lily Restaurant",
    image: "lily.jpg",
    email: "lily@example.com",
    phone: "345-678-9012",
  },
  {
    name: "Medi Pe Cafe",
    image: "medi_pe_cafe.jpg",
    email: "medi@example.com",
    phone: "456-789-0123",
  },
  // Add more restaurant data here...
];

const initialCustomers = [
  {
    name: "John Doe",
    image: "customer1.jpg",
    email: "john.doe@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Jane Smith",
    image: "customer2.jpg",
    email: "jane.smith@example.com",
    phone: "666-666-6666",
  },
  {
    name: "Alice Johnson",
    image: "customer3.jpg",
    email: "alice.johnson@example.com",
    phone: "777-777-7777",
  },
  {
    name: "Bob Brown",
    image: "customer4.jpg",
    email: "bob.brown@example.com",
    phone: "888-888-8888",
  },
  // Add more customer data here...
];

function Admin() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [customers, setCustomers] = useState(initialCustomers);
  const [foodCategories, setFoodCategories] = useState([]);
  const [foodCategory, setFoodCategory] = useState("");
  const [foodImage, setFoodImage] = useState(null);

  const handleRemoveRestaurant = (restaurantName) => {
    alert(`Remove restaurant: ${restaurantName}`);
  };

  const handleRemoveCustomer = (customerName) => {
    alert(`Remove customer: ${customerName}`);
  };

  const handleRemoveCategory = (categoryName) => {
    setFoodCategories(
      foodCategories.filter((category) => category.name !== categoryName)
    );
  };

  const handleEditCategory = (categoryName) => {
    alert(`Edit category: ${categoryName}`);
  };

  const handleAddCategory = (event) => {
    event.preventDefault();
    if (!foodCategory || !foodImage) {
      alert("Please enter a category name and upload an image.");
      return;
    }
    const newCategory = {
      name: foodCategory,
      image: URL.createObjectURL(foodImage),
    };
    setFoodCategories([...foodCategories, newCategory]);
    setFoodCategory("");
    setFoodImage(null);
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {foodCategories.map((category, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={category.image}
                          alt={category.name}
                          className="table-image"
                        />
                      </td>
                      <td>{category.name}</td>
                      <td>
                        <button
                          className="edit-button"
                          onClick={() => handleEditCategory(category.name)}
                        >
                          Edit
                        </button>
                        <button
                          className="remove-button"
                          onClick={() => handleRemoveCategory(category.name)}
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="table-image"
                    />
                  </td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveCustomer(customer.name)}
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
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="table-image"
                    />
                  </td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.email}</td>
                  <td>{restaurant.phone}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveRestaurant(restaurant.name)}
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
}

export default Admin;
