import { Router } from "express";
import { signin } from "../controllers/auth_controller.js";

const signinRouter = Router();

signinRouter.post("/signin", signin);

export default signinRouter;