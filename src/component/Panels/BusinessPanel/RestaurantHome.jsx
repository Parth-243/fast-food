// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./RestaurantHome.module.css";
// import RestaurantHeader from "../../Layout/restaurantHeader";
// import RestaurantRegistration from "./RestaurantRegistration";

// const RestaurantHome = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showRegistration, setShowRegistration] = useState(false);
//   const [user, setUser] = useState(null); // State for storing user information
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:4000/business/auth/user",
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );

//         if (response.status === 401) {
//           navigate("/businessLogin");
//         }

//         if (!response.ok) {
//           throw new Error("Failed to fetch user information");
//         }

//         const userData = await response.json();
//         setUser(userData); // Set user state with fetched user data
//       } catch (error) {
//         console.error("Error fetching user information:", error);
//       }
//     };

//     fetchUser();
//   }, [navigate]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:4000/business/restaurant",
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );

//         if (response.status === 401) {
//           navigate("/businessLogin");
//         }

//         if (!response.ok) {
//           throw new Error("Failed to fetch restaurants");
//         }

//         const data = await response.json();
//         setRestaurants(data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, [navigate]);

//   const handleRegistrationSubmit = (restaurantData) => {
//     // Handle registration form submission here
//     console.log(restaurantData);
//     setShowRegistration(false); // Close the modal after submission
//   };

//   const handleCancel = () => {
//     setShowRegistration(false);
//   };

//   const handleEditRestaurant = (restaurantId) => {
//     // Handle edit restaurant action
//     console.log("Edit restaurant:", restaurantId);
//     // Navigate to edit page or perform desired action
//     navigate(`/restaurant/${restaurantId}`);
//   };

//   const handleViewMenu = (restaurantId) => {
//     // Handle view menu action
//     console.log("View menu for restaurant:", restaurantId);
//     // Navigate to menu page or perform desired action
//     navigate(`/RestaurantFoodMenu`);
//   };

//   return (
//     <>
//       <RestaurantHeader />

//       <div className={styles.restaurantPage}>
//         {user && (
//           <div className="user-info">
//             <div className="user-name-box">
//               <h2>Welcome, {user.username}!</h2>
//             </div>
//             <div className="user-img-box">
//               <img src={user.profile_picture} alt="User" />
//             </div>
//           </div>
//         )}

//         <div className={styles.headingContainer}>
//           <h1 className={styles.heading}>Your Restaurants</h1>
//           <button
//             className={styles.registerButton}
//             onClick={() => setShowRegistration(true)}
//           >
//             Register More Restaurant
//           </button>
//         </div>

//         {restaurants.length === 0 ? (
//           <div className={styles.noRestaurants}>
//             <RestaurantRegistration onSubmit={handleRegistrationSubmit} />
//           </div>
//         ) : (
//           <div className={styles.restaurantGrid}>
//             {restaurants.map((restaurant) => (
//               <div key={restaurant._id} className={styles.restaurantCard}>
//                 <img
//                   src={restaurant.picture}
//                   alt={restaurant.name}
//                   className={styles.restaurantImage}
//                 />
//                 <div className={styles.restaurantInfo}>
//                   <h2 className={styles.restaurantName}>{restaurant.name}</h2>
//                   <p className={styles.restaurantDescription}>
//                     {restaurant.description}
//                   </p>
//                   <div className={styles.buttonContainer}>
//                     <button
//                       className={styles.editButton}
//                       onClick={() => setShowRegistration(true)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className={styles.moreButton}
//                       onClick={() => handleViewMenu(restaurant._id)}
//                     >
//                       More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {showRegistration && (
//           <RestaurantRegistration
//             onSubmit={handleRegistrationSubmit}
//             onCancel={handleCancel}
//             initialValues={handleRegistrationSubmit}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default RestaurantHome;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RestaurantHome.module.css";
import RestaurantHeader from "../../Layout/restaurantHeader";
import RestaurantRegistration from "./RestaurantRegistration";

const RestaurantHome = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const [user, setUser] = useState(null); // State for storing user information
  const [editRestaurant, setEditRestaurant] = useState(null); // State for storing restaurant to edit
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/business/auth/user",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 401) {
          navigate("/businessLogin");
        }

        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }

        const userData = await response.json();
        setUser(userData); // Set user state with fetched user data
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUser();
  }, [navigate]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/business/restaurant",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 401) {
          navigate("/businessLogin");
        }

        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [navigate]);

  const handleRegistrationSubmit = (restaurantData) => {
    // Handle registration form submission here
    console.log(restaurantData);
    setShowRegistration(false); // Close the modal after submission
    setEditRestaurant(null); // Reset editRestaurant state
  };

  const handleCancel = () => {
    setShowRegistration(false);
    setEditRestaurant(null); // Reset editRestaurant state
  };

  const handleEditRestaurant = (restaurant) => {
    // Handle edit restaurant action
    console.log("Edit restaurant:", restaurant._id);
    setEditRestaurant(restaurant);
    setShowRegistration(true);
  };

  const handleViewMenu = (restaurantId) => {
    // Handle view menu action
    console.log("View menu for restaurant:", restaurantId);
    // Navigate to menu page or perform desired action
    navigate(`/RestaurantFoodMenu`);
  };

  return (
    <>
      <RestaurantHeader />

      <div className={styles.restaurantPage}>
        {user && (
          <div className="user-info">
            <div className="user-name-box">
              <h2>Welcome, {user.username}!</h2>
            </div>
            <div className="user-img-box">
              <img src={user.profile_picture} alt="User" />
            </div>
          </div>
        )}

        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Your Restaurants</h1>
          <button
            className={styles.registerButton}
            onClick={() => setShowRegistration(true)}
          >
            Register More Restaurant
          </button>
        </div>

        {restaurants.length === 0 ? (
          <div className={styles.noRestaurants}>
            <RestaurantRegistration onSubmit={handleRegistrationSubmit} />
          </div>
        ) : (
          <div className={styles.restaurantGrid}>
            {restaurants.map((restaurant) => (
              <div key={restaurant._id} className={styles.restaurantCard}>
                <img
                  src={restaurant.picture}
                  alt={restaurant.name}
                  className={styles.restaurantImage}
                />
                <div className={styles.restaurantInfo}>
                  <h2 className={styles.restaurantName}>{restaurant.name}</h2>
                  <p className={styles.restaurantDescription}>
                    {restaurant.description}
                  </p>
                  <div className={styles.buttonContainer}>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEditRestaurant(restaurant)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.moreButton}
                      onClick={() => handleViewMenu(restaurant._id)}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showRegistration && (
          <RestaurantRegistration
            onSubmit={handleRegistrationSubmit}
            onCancel={handleCancel}
            initialValues={editRestaurant}
          />
        )}
      </div>
    </>
  );
};

export default RestaurantHome;
