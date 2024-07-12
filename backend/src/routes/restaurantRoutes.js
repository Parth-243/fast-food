// import express from "express";
// import { createRestaurant } from "../controllers/BusinessControllers/restaurantController.js";

// const router = express.Router();

// router.post("/", createRestaurant);

// export default router;
import express from "express";
import restaurantController from "../controllers/BusinessControllers/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/create", restaurantController.createRestaurant);
restaurantRouter.get("/image/:id", restaurantController.getRestaurantImage);

export default restaurantRouter;
