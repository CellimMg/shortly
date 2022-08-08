import { Router } from "express";
import { getUserStats } from "../controllers/users_controller.js";
import { verifyToken } from "../middlewares/authentication_middleware.js";

const usersRouter = Router();

usersRouter.get("/users/me", verifyToken, getUserStats);

export default usersRouter;