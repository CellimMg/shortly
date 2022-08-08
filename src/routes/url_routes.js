import { Router } from "express";
import { deleteUrl, getUrl, postUrl, redirect } from "../controllers/url_controller.js";
import { verifyToken } from "../middlewares/authentication_middleware.js";

const urlRouter = Router();


urlRouter.get("/urls/:id", getUrl);
urlRouter.get("/urls/open/:shortUrl", redirect);
urlRouter.delete("/urls/:id", verifyToken, deleteUrl);
urlRouter.post("/urls/shorten", verifyToken, postUrl);

export default urlRouter;