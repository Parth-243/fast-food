import React, { useState } from "react";
import "./RestaurantRegistration.css";

const RestaurantRegistration = ({ onSubmit, onCancel }) => {
  const [restaurantName, setRestaurantName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [restaurantImage, setRestaurantImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const restaurantData = {
      name: restaurantName,
      description,
      mobile: phoneNo,
      opensAt: openingTime,
      closesAt: closingTime,
      address,
      state,
      city,
      postalCode: pincode,
    };

    try {
      // POST restaurant information
      const response = await fetch(
        "http://localhost:4000/business/restaurant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify(restaurantData),
          // redirect: "follow",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register restaurant");
      }

      const result = await response.json();
      console.log("Restaurant registered:", result);

      // POST restaurant image
      if (restaurantImage) {
        const formData = new FormData();
        formData.append("file", restaurantImage);

        const uploadResponse = await fetch(
          `http://localhost:4000/business/restaurant/picture/${result._id}`,
          {
            method: "POST",
            headers: {
              // Do not set Content-Type when using FormData
            },
            credentials: "include",
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload restaurant image");
        }

        const uploadResult = await uploadResponse.json();
        console.log("Image uploaded:", uploadResult);
      }

      // Clear form fields after successful submission
      setRestaurantName("");
      setDescription("");
      setAddress("");
      setPhoneNo("");
      setOpeningTime("");
      setClosingTime("");
      setState("");
      setCity("");
      setPincode("");
      setRestaurantImage(null);

      // Call the onSubmit callback with the new restaurant data
      // onSubmit(result);
    } catch (error) {
      console.error("Error registering restaurant:", error);
    }
  };

  return (
    <div className="restaurant-registration-modal">
      <div className="restaurant-registration-modal-content">
        <h2>Restaurant Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="tel"
              id="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="openingTime">Opening Time</label>
            <input
              type="time"
              id="openingTime"
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="closingTime">Closing Time</label>
            <input
              type="time"
              id="closingTime"
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="restaurantImage">Upload Image</label>
            <input
              type="file"
              id="restaurantImage"
              onChange={(e) => setRestaurantImage(e.target.files[0])}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Register Restaurant
            </button>
            <button type="button" className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
