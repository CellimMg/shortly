import { Router } from "express";
import { verifyToken } from "../middlewares/authentication_middleware.js";

const urlRouter = Router();


urlRouter.get("/urls/:id",);
urlRouter.get("/urls/open/:shortUrl",);
urlRouter.delete("/urls/:id", verifyToken);
urlRouter.post("/urls/shorten", verifyToken);

export default urlRouter;