import React, { useState } from "react";
import styles from "./PaymentOrderPage.module.css";
import RestaurantHeader from "../../../Layout/restaurantHeader";

const PaymentOrderPage = () => {
  const [orders] = useState([
    {
      restaurantName: "Restaurant A",
      orderDetails: [
        {
          customer: {
            name: "John Doe",
            email: "john@example.com",
            profileImage: "https://via.placeholder.com/50",
          },
          foodCategory: {
            categoryName: "Fast Food",
            itemName: "Pizza",
            description: "Delicious cheese pizza",
            price: 299,
            image: "https://via.placeholder.com/150",
          },
          date: "2024-07-16 12:30",
          payment: {
            amount: 299,
            status: "Paid",
          },
        },
        {
          customer: {
            name: "Jane Smith",
            email: "jane@example.com",
            profileImage: "https://via.placeholder.com/50",
          },
          foodCategory: {
            categoryName: "Desserts",
            itemName: "Ice Cream",
            description: "Vanilla ice cream",
            price: 99,
            image: "https://via.placeholder.com/150",
          },
          date: "2024-07-15 15:45",
          payment: {
            amount: 99,
            status: "Pending",
          },
        },
      ],
    },
    {
      restaurantName: "Restaurant B",
      orderDetails: [
        {
          customer: {
            name: "Alice Johnson",
            email: "alice@example.com",
            profileImage: "https://via.placeholder.com/50",
          },
          foodCategory: {
            categoryName: "Main Course",
            itemName: "Pasta",
            description: "Creamy Alfredo pasta",
            price: 249,
            image: "https://via.placeholder.com/150",
          },
          date: "2024-07-14 18:20",
          payment: {
            amount: 249,
            status: "Not Paid",
          },
        },
      ],
    },
  ]);

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return styles.paid;
      case "Not Paid":
        return styles.notPaid;
      case "Pending":
        return styles.pending;
      default:
        return "";
    }
  };

  return (
    <>
      <RestaurantHeader />
      <div className={styles.paymentOrderPage}>
        {orders.map((restaurant, index) => (
          <div key={index} className={styles.restaurantSection}>
            <h1 className={styles.restaurantName}>
              {restaurant.restaurantName}
            </h1>
            <table className={styles.ordersTable}>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Food Category</th>
                  <th>Date</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {restaurant.orderDetails.map((order, idx) => (
                  <tr key={idx}>
                    <td className={styles.customerDetails}>
                      <table>
                        <thead>
                          <tr>
                            <th>Profile Image</th>
                            <th>Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={order.customer.profileImage}
                                alt={order.customer.name}
                                className={styles.profileImage}
                              />
                            </td>
                            <td>{order.customer.name}</td>
                            <td>{order.customer.email}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className={styles.foodDetails}>
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={order.foodCategory.image}
                                alt={order.foodCategory.itemName}
                                className={styles.foodImage}
                              />
                            </td>
                            <td>{order.foodCategory.categoryName}</td>
                            <td>{order.foodCategory.itemName}</td>
                            <td>{order.foodCategory.description}</td>
                            <td>₹{order.foodCategory.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className={styles.orderDate}>
                      <p>{order.date}</p>
                    </td>
                    <td
                      className={`${
                        styles.paymentStatus
                      } ${getPaymentStatusColor(order.payment.status)}`}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>₹{order.payment.amount}</td>
                            <td>{order.payment.status}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentOrderPage;
