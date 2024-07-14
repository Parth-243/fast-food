import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RestaurantHome.module.css"; // Import CSS module
import RestaurantHeader from "../../Layout/restaurantHeader";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`http://localhost:4000/business/menu?restaurantId=${id}`, {
          method: "GET",
          credentials: "include", // Ensure cookies are included in the request
        });

        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (menu.length === 0) {
    return <div>No menu items available</div>;
  }

  return (
    <div className={styles["menu-page"]}>
      <RestaurantHeader />
      <div className={styles["menu-list"]}>
        {menu.map((item) => (
          <div key={item.menuId} className={styles["menu-item"]}>
            <img src={item.image} alt={item.foodId} className={styles["menu-image"]} />
            <div className={styles["menu-info"]}>
              <h2 className={styles["menu-name"]}>{item.foodId}</h2>
              <p className={styles["menu-price"]}>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
