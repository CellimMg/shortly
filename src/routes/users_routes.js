import { Router } from "express";
import { getUserStats } from "../controllers/users_controller";
import { verifyToken } from "../middlewares/authentication_middleware";

const usersRouter = Router();

usersRouter.get("/users/me", verifyToken, getUserStats);

export default usersRouter;