import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import UserHeader from "../../../Layout/UserHeaders";

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    postalCode: "",
    dob: "",
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    fetchUserData();
    fetchUserProfile();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:4000/users/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const userData = await response.json();
      setFormData((prevData) => ({
        ...prevData,
        username: userData.username,
        email: userData.email,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("http://localhost:4000/users/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const profileData = await response.json();
      setProfilePicture(profileData.picture);
      setFormData((prevData) => ({
        ...prevData,
        phone: profileData.mobile,
        address: profileData.address,
        state: profileData.state,
        city: profileData.city,
        postalCode: profileData.postalCode,
        dob: profileData.dob.split("T")[0],
        gender: profileData.gender,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
      }));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(
          "http://localhost:4000/users/profile/picture",
          {
            method: "POST",
            headers: {
              // Do not set Content-Type when using FormData
            },
            credentials: "include",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProfilePicture(data.picture);
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      phone,
      address,
      state,
      city,
      postalCode,
      dob,
      gender,
      firstName,
      lastName,
    } = formData;

    const profileData = {
      firstName,
      lastName,
      dob,
      gender,
      mobile: phone,
      address,
      state,
      city,
      postalCode,
    };

    try {
      const response = await fetch("http://localhost:4000/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedProfile = await response.json();
      console.log("Updated profile data:", updatedProfile);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleNextClick = () => {
    setShowSecondSection(true);
  };

  return (
    <>
      <UserHeader />
      <div className="profile-page">
        <div className="profile-card-container">
          <div className="profile-card">
            <div className="profile-header">
              <img
                // src={profilePicture}
                src="dummy-img.jpg"
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
                  readOnly
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
                State:
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter your state"
                  required
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                />
              </label>
              <label>
                Postal Code:
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Enter your postal code"
                  required
                />
              </label>
              {!showSecondSection && (
                <button type="button" onClick={handleNextClick}>
                  Next
                </button>
              )}
              {showSecondSection && (
                <>
                  <label>
                    Date of Birth:
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label>
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
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
                      readOnly
                    />
                  </label>
                  <button type="submit">Save</button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
