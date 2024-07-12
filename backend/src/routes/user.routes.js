// import express from "express";
// import userController from "../controllers/user.Controller.js";
// import authenticateToken from "../auth/userAuth.js";

// const userRouter = express.Router();

// userRouter.post("/signup", userController.signUp);
// userRouter.post("/login", userController.signIn);
// userRouter.get("/getuser", authenticateToken, userController.getUser);
// userRouter.put("/updateadd", authenticateToken, userController.updateAdd);
// export default userRouter;

import express from "express";
import userController from "../controllers/user.Controller.js";
import authenticateToken from "../auth/userAuth.js";

const userRouter = express.Router();

userRouter.post("/signup", userController.signUp);
userRouter.post("/login", userController.signIn);
userRouter.get("/getuser", authenticateToken, userController.getUser);
userRouter.put("/updateadd", authenticateToken, userController.updateAdd);

export default userRouter;
