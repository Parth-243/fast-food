import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      //   required:true
    },
    role: {
      type: String,
      // default: "user",
      enum: ["Admin", "user", "restaurantUser"],
    },
    phoneNo: {
      type: String,
      // required: [true, "Phone number is required"],
      trim: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    gender: {
      type: String,
      // enum: ["Male", "Female", "Other"],
      // required: [true, "Gender is required"],
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    profileImg: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
