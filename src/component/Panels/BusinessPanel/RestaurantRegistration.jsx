// import React, { useState } from "react";
// import "./RestaurantRegistration.css";

// const RestaurantRegistration = ({ onSubmit }) => {
//   const [restaurantName, setRestaurantName] = useState("");
//   const [description, setDescription] = useState("");
//   const [address, setAddress] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [openingTime, setOpeningTime] = useState("");
//   const [closingTime, setClosingTime] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [pincode, setPincode] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       name: restaurantName,
//       description,
//       mobile: phoneNo,
//       opensAt: openingTime,
//       closesAt: closingTime,
//       address,
//       state,
//       city,
//       postalCode: pincode,
//     });
//   };

//   return (
//     <div className="restaurant-registration-modal">
//       <div className="restaurant-registration-modal-content">
//         <h2>Restaurant Registration</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="restaurantName">Restaurant Name</label>
//             <input
//               type="text"
//               id="restaurantName"
//               value={restaurantName}
//               onChange={(e) => setRestaurantName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phoneNo">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNo"
//               value={phoneNo}
//               onChange={(e) => setPhoneNo(e.target.value)}
//               pattern="[0-9]{10}"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="openingTime">Opening Time</label>
//             <input
//               type="time"
//               id="openingTime"
//               value={openingTime}
//               onChange={(e) => setOpeningTime(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="closingTime">Closing Time</label>
//             <input
//               type="time"
//               id="closingTime"
//               value={closingTime}
//               onChange={(e) => setClosingTime(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State</label>
//             <input
//               type="text"
//               id="state"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City</label>
//             <input
//               type="text"
//               id="city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pincode">Pincode</label>
//             <input
//               type="text"
//               id="pincode"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button">
//             Register Restaurant
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RestaurantRegistration;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: restaurantName,
      description,
      mobile: phoneNo,
      opensAt: openingTime,
      closesAt: closingTime,
      address,
      state,
      city,
      postalCode: pincode,
    });
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
