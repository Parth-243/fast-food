// // import BusinessUser from "../../models/BusinessUserModels/businessUser.model.js";
// import Restaurant from "../../models/BusinessUserModels/resaurant.model.js";

// // Create a new restaurant
// export const createRestaurant = async (req, res) => {
//   const {
//     restaurantName,
//     address,
//     phoneNo,
//     restaurantLicense,
//     restaurantImage,
//     openingTime,
//     closingTime,
//     state,
//     city,
//     pincode,
//     ownerName,
//   } = req.body;

//   try {
//     // Validate required fields
//     if (
//       !restaurantName ||
//       !address ||
//       !phoneNo ||
//       !restaurantLicense ||
//       !openingTime ||
//       !closingTime ||
//       !state ||
//       !city ||
//       !pincode ||
//       !ownerName
//     ) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     // Create a new restaurant instance
//     const newRestaurant = new Restaurant({
//       restaurantName,
//       address,
//       phoneNo,
//       restaurantLicense,
//       restaurantImage: restaurantImage || "",
//       ownerName,
//       openingTime,
//       closingTime,
//       state,
//       city,
//       pincode,
//     });

//     // Save the restaurant to the database
//     const savedRestaurant = await newRestaurant.save();

//     // Respond with the created restaurant
//     res.status(201).json(savedRestaurant);
//   } catch (error) {
//     console.error("Error creating restaurant:", error);
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };

// src/controllers/BusinessControllers/restaurantController.js
// import Restaurant from "../../models/BusinessUserModels/resaurant.model.js";
// import BusinessUser from "../../models/BusinessUserModels/businessUser.model.js";

// export const createRestaurant = async (req, res) => {
//   try {
//     const {
//       restaurantName,
//       address,
//       phoneNo,
//       restaurantLicense,
//       restaurantImage,
//       ownerName, // This should be a valid BusinessUser ID,
//       openingTime,
//       closingTime,
//       state,
//       city,
//       pincode,
//     } = req.body;

//     // Verify that the ownerName (business user ID) exists
//     const businessUser = await BusinessUser.findById(ownerName);
//     if (!businessUser) {
//       return res.status(404).json({ message: "BusinessUser not found" });
//     }

//     // Create new Restaurant entry
//     const newRestaurant = new Restaurant({
//       restaurantName,
//       address,
//       phoneNo,
//       restaurantLicense,
//       restaurantImage,
//       ownerName, // Set the ownerName to the ID of the BusinessUser
//       openingTime,
//       closingTime,
//       state,
//       city,
//       pincode,
//     });

//     // Save to database
//     const savedRestaurant = await newRestaurant.save();

//     res.status(201).json(savedRestaurant);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating restaurant", error: error.message });
//   }
// };

// import Restaurant from "../../models/BusinessUserModels/resaurant.model.js";
// import User from "../../models/user.model.js";

// export const createRestaurant = async (req, res) => {
//   // return res.json({ status: 200, test: "test" });
//   try {
//     const {
//       restaurantName,
//       address,
//       phoneNo,
//       restaurantLicense,
//       restaurantImage,
//       ownerName, // This should be a valid BusinessUser ID
//       openingTime,
//       closingTime,
//       state,
//       city,
//       pincode,
//     } = req.body;

//     // Verify that the ownerName (business user ID) exists
//     const businessUser = await BusinessUser.findById(ownerName);
//     if (!businessUser) {
//       return res.status(404).json({ message: "BusinessUser not found" });
//     }

//     // Create new Restaurant entry
//     const newRestaurant = new Restaurant({
//       restaurantName,
//       address,
//       phoneNo,
//       restaurantLicense,
//       restaurantImage,
//       ownerName, // Set the ownerName to the ID of the BusinessUser
//       openingTime,
//       closingTime,
//       state,
//       city,
//       pincode,
//     });

//     // Save to database
//     const savedRestaurant = await newRestaurant.save();

//     // Populate the ownerName field with business user details
//     const populatedRestaurant = await savedRestaurant.populate(
//       "ownerName",
//       "fullname email userName"
//     );

//     res.status(201).json(populatedRestaurant);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating restaurant", error: error.message });
//   }
// };

import Restaurant from "../../models/BusinessUserModels/resaurant.model.js";
import upload from "../../Configure/multerConfig.js";

const restaurantController = {
  async createRestaurant(req, res) {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      } else {
        const {
          restaurantName,
          address,
          phoneNo,
          ownerName,
          openingTime,
          closingTime,
          state,
          city,
          pincode,
        } = req.body;

        if (
          !restaurantName ||
          !address ||
          !phoneNo ||
          !ownerName ||
          !openingTime ||
          !closingTime ||
          !state ||
          !city ||
          !pincode
        ) {
          return res.status(400).json({ message: "All fields are required" });
        }

        try {
          const newRestaurant = new Restaurant({
            restaurantName,
            address,
            phoneNo,
            ownerName,
            openingTime,
            closingTime,
            state,
            city,
            pincode,
            restaurantImage: req.file ? req.file.path : "",
          });

          await newRestaurant.save();
          res.status(201).json({ message: "Restaurant created successfully" });
        } catch (error) {
          console.error("Error creating restaurant:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
    });
  },

  async getRestaurantImage(req, res) {
    try {
      const { id } = req.params;
      const restaurant = await Restaurant.findById(id);

      if (!restaurant || !restaurant.restaurantImage) {
        return res.status(404).json({ message: "Image not found" });
      }

      res.sendFile(path.resolve(restaurant.restaurantImage));
    } catch (error) {
      console.error("Error fetching restaurant image:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default restaurantController;
