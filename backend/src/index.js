// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

console.log(`Loaded MONGODB_URI: ${process.env.MONGODB_URI}`); // Added line for URL debugging

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
