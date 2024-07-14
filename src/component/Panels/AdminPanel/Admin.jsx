import React from "react";
import "./Admin.css";
import AdminHeader from "../../Layout/AdminHeader";
const restaurants = [
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

const customers = [
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
  const handleRemoveRestaurant = (restaurantName) => {
    alert(`Remove restaurant: ${restaurantName}`);
  };

  const handleRemoveCustomer = (customerName) => {
    alert(`Remove customer: ${customerName}`);
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-page">
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
      </div>
    </>
  );
}

export default Admin;
