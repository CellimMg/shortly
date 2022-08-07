import signupSchema from "../schemas/signup_schema.js";
import { createUser } from "../repositories/auth_repository.js";

export async function signup(req, res) {
    try {
        const data = req.body;
        validateSignup(data);
        await createUser(data);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(error.code).send({ message: error.message });
    }
}

export async function signin(req, res) {

}

function validateSignup(signup) {
    const { error } = signupSchema.validate(signup);
    if (error) throw { code: 422, message: error.message };
}
