import express from "express";
import cors from "cors";

const server = express();
server.use(cors);
server.use(express.json());

server.listen(3000, () => {
    console.log("Listening to port 3000");
});