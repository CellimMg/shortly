import pkg from "jsonwebtoken";
import dotenv from "dotenv";
const { verify } = pkg;
dotenv.config();


export function verifyToken(req, res, next) {
    const { authorization } = req.headers;
    try {
        console.log(authorization);
        const [, token] = authorization.split(" ");
        verify(token, process.env.JWT_KEY);
        console.log('validooo');
    } catch (error) {
        return res.status(401).send({ message: "Token inválido!" });
    }
}