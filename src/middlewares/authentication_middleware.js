import pkg from "jsonwebtoken";
import dotenv from "dotenv";
const { verify } = pkg;
dotenv.config();


export function verifyToken(req, res, next) {
    const { authorization } = req.headers;
    try {
        console.log(authorization);
        const [, token] = authorization.split(" ");
        res.locals.userData = verify(token, process.env.JWT_KEY);
        next();
    } catch (error) {
        return res.status(401).send({ message: "Token inválido!" });
    }
}