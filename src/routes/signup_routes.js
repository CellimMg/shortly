import { Router } from "express";
import { signup } from "../controllers/auth_controller.js";

const signupRouter = Router();

signupRouter.post("/signup", signup);
export default signupRouter;