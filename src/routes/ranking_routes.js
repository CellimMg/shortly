import { Router } from "express";
import { getRanking } from "../controllers/ranking_controller.js";

const rankingRouter = Router();

rankingRouter.get("/ranking", getRanking);

export default rankingRouter;