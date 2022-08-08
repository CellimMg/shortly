import express from "express";
import cors from "cors";
import signinRouter from "./routes/signin_routes.js";
import signupRouter from "./routes/signup_routes.js";
import urlRouter from "./routes/url_routes.js";
import usersRouter from "./routes/users_routes.js";
import rankingRouter from "./routes/ranking_routes.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(signinRouter)
server.use(signupRouter)
server.use(urlRouter);
server.use(usersRouter);
server.use(rankingRouter);

server.listen(4000, () => {
    console.log("Listening to port 4000");
});