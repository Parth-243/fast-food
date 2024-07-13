// import React, { useState } from 'react';
// import './UserProfile.css';

// const UserProfile = () => {
//   const [profilePicture, setProfilePicture] = useState('your-profile-picture-url.jpg');

//   const handleProfilePictureChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePicture(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-page">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img src={profilePicture} alt="Profile" className="profile-picture" />
//           <input type="file" accept="image/*" onChange={handleProfilePictureChange} className="file-input" />
//         </div>
//         <form className="profile-form">
//           <label>
//             User Name:
//             <input type="text" name="username" required />
//           </label>
//           <label>
//             Phone Number:
//             <input type="tel" name="phone" pattern="[0-9]{10}" maxLength="10" required />
//           </label>
//           <label>
//             Address:
//             <textarea name="address" required></textarea>
//           </label>
//           <label>
//             Description:
//             <textarea name="description" required></textarea>
//           </label>
//           <label>
//             Reset Password:
//             <input type="password" name="password" required />
//           </label>
//           <label>
//             Email ID:
//             <input type="email" name="email" required />
//           </label>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

// UserProfile.jsx
// UserProfile.jsx
import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import UserHeader from "../../../Layout/UserHeaders";

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(
    "your-profile-picture-url.jpg"
  );
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    address: "",
    description: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    // Simulated data fetching from backend
    // Replace with actual API call to fetch user data
    const fetchData = async () => {
      try {
        // Example of fetched data
        const userData = {
          username: "JohnDoe",
          phone: "1234567890",
          address: "123 Street, City",
          description: "Lorem ipsum dolor sit amet.",
          email: "johndoe@example.com",
        };
        setFormData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulated update API call
    console.log("Updated user data:", formData);
    // Replace with actual API call to update user data
    // Example: updateUserData(formData);
  };

  return (
    <>
      <UserHeader />
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-header">
            <img
              src={profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="file-input"
            />
          </div>
          <form className="profile-form" onSubmit={handleSubmit}>
            <label>
              User Name:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength="10"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label>
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                required
              ></textarea>
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter your description"
                required
              ></textarea>
            </label>
            <label>
              Reset Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your new password"
                required
              />
            </label>
            <label>
              Email ID:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
