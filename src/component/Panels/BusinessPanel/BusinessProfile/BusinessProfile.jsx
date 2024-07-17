// import React, { useState, useEffect } from "react";
// import "./BusinessProfile.css";
// import RestaurantHeader from "../../../Layout/restaurantHeader";

// const BusinessProfile = () => {
//   const [user, setUser] = useState({
//     profileImage: "",
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [restaurant, setRestaurant] = useState({
//     profileImage: "",
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//     description: "",
//   });

//   useEffect(() => {
//     // Fetch user and restaurant data from the mock API
//     fetch("http://localhost:8000/user")
//       .then((response) => response.json())
//       .then((data) => setUser((prevState) => ({ ...prevState, ...data })));

//     fetch("http://localhost:8000/restaurant")
//       .then((response) => response.json())
//       .then((data) => setRestaurant(data));
//   }, []);

//   const handleUserChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleRestaurantChange = (e) => {
//     const { name, value } = e.target;
//     setRestaurant({ ...restaurant, [name]: value });
//   };

//   const handleSubmit = () => {
//     // handle form submission
//     console.log("User Info:", user);
//     console.log("Restaurant Info:", restaurant);
//   };

//   const handleUserSubmit = () => {
//     // handle user form submission
//     console.log("User Info Submitted:", user);
//   };

//   return (
//     <>
//       <RestaurantHeader />
//       <div className="business-profile-page">
//         <h1 className="title">Business Profile</h1>
//         <div className="profile-section">
//           <h2 className="section-title">User Information</h2>
//           <div className="profile-image">
//             <img src={user.profileImage} alt="User Profile" />
//             <input
//               type="file"
//               name="profileImage"
//               onChange={(e) =>
//                 handleUserChange({
//                   target: {
//                     name: "profileImage",
//                     value: URL.createObjectURL(e.target.files[0]),
//                   },
//                 })
//               }
//             />
//           </div>
//           <label className="input-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder={user.name}
//             value={user.name}
//             onChange={handleUserChange}
//             className="input-field"
//           />
//           <label className="input-label">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder={user.email}
//             value={user.email}
//             onChange={handleUserChange}
//             className="input-field"
//           />
//           <label className="input-label">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             placeholder={user.phone}
//             value={user.phone}
//             onChange={handleUserChange}
//             className="input-field"
//           />
//           <label className="password-label">Re-set Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="New Password"
//             value={user.password}
//             onChange={handleUserChange}
//             className="input-field"
//           />
//           <label className="input-label">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm New Password"
//             value={user.confirmPassword}
//             onChange={handleUserChange}
//             className="input-field"
//           />
//           <button className="submit-button" onClick={handleUserSubmit}>
//             Submit User Info
//           </button>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Restaurant Information</h2>
//           <div className="profile-image">
//             <img src={restaurant.profileImage} alt="Restaurant Profile" />
//             <input
//               type="file"
//               name="profileImage"
//               onChange={(e) =>
//                 handleRestaurantChange({
//                   target: {
//                     name: "profileImage",
//                     value: URL.createObjectURL(e.target.files[0]),
//                   },
//                 })
//               }
//             />
//           </div>
//           <label className="input-label">Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder={restaurant.name}
//             value={restaurant.name}
//             onChange={handleRestaurantChange}
//             className="input-field"
//           />
//           <label className="input-label">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder={restaurant.email}
//             value={restaurant.email}
//             onChange={handleRestaurantChange}
//             className="input-field"
//           />
//           <label className="input-label">Address</label>
//           <input
//             type="text"
//             name="address"
//             placeholder={restaurant.address}
//             value={restaurant.address}
//             onChange={handleRestaurantChange}
//             className="input-field"
//           />
//           <label className="input-label">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             placeholder={restaurant.phone}
//             value={restaurant.phone}
//             onChange={handleRestaurantChange}
//             className="input-field"
//           />
//           <label className="input-label">Description</label>
//           <textarea
//             name="description"
//             placeholder={restaurant.description}
//             value={restaurant.description}
//             onChange={handleRestaurantChange}
//             className="input-field textarea-field"
//           ></textarea>
//           <button className="submit-button" onClick={handleSubmit}>
//             Submit Restaurant Info
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BusinessProfile;

import React, { useState, useEffect } from "react";
import "./BusinessProfile.css";
import RestaurantHeader from "../../../Layout/restaurantHeader";

const BusinessProfile = () => {
  const [user, setUser] = useState({
    profileImage: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Fetch user data from the mock API
    fetch("http://localhost:8000/user")
      .then((response) => response.json())
      .then((data) => setUser((prevState) => ({ ...prevState, ...data })));
  }, []);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUserSubmit = () => {
    // handle user form submission
    console.log("User Info Submitted:", user);
  };

  return (
    <>
      <RestaurantHeader />
      <div className="business-profile-page">
        <div className="profile-section">
          <h1 className="section-title">User Information</h1>
          <div className="profile-image">
            <img src={user.profileImage} alt="User Profile" />
            <input
              type="file"
              name="profileImage"
              onChange={(e) =>
                handleUserChange({
                  target: {
                    name: "profileImage",
                    value: URL.createObjectURL(e.target.files[0]),
                  },
                })
              }
            />
          </div>
          <label className="input-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleUserChange}
            className="input-field"
          />
          <label className="input-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleUserChange}
            className="input-field"
          />
          <label className="input-label">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={user.phone}
            onChange={handleUserChange}
            className="input-field"
          />
          <label className="password-label">Re-set Password</label>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={user.password}
            onChange={handleUserChange}
            className="input-field"
          />
          <label className="input-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={user.confirmPassword}
            onChange={handleUserChange}
            className="input-field"
          />
          <button className="submit-button" onClick={handleUserSubmit}>
            Submit User Info
          </button>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;
