import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import restaurantRouter from "./routes/restaurantRoutes.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use("/uploads", express.static("uploads")); // Serve static files from the 'uploads' directory

// // Use user routes
app.use("/api/users", userRouter);
app.use("/api/restaurants", restaurantRouter);

export { app };
