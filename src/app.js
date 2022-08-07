import express from "express";
import cors from "cors";
import router from "./routes/signup_routes.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router)


server.listen(4000, () => {
    console.log("Listening to port 4000");
});