import express from "express";
import cors from "cors";
import signinRouter from "./routes/signin_routes.js"
import signupRouter from "./routes/signup_routes.js"

const server = express();

server.use(cors());
server.use(express.json());
server.use(signinRouter)
server.use(signupRouter)

server.listen(4000, () => {
    console.log("Listening to port 4000");
});