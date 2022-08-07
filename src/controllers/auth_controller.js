import signupSchema from "../schemas/signup_schema.js";
import { createUser } from "../repositories/auth_repository.js";
import signinSchema from "../schemas/signin_schema.js";

export async function signup(req, res) {
    try {
        const data = req.body;
        validateSignup(data);
        await createUser(data);
        return res.sendStatus(201);
    } catch (error) {
        switch (error) {
            case "UNEXPECTED_ERROR":
                return res.status(500).send({ message: "Ocorreu um erro inesperado! Tenta novamente em instantes ou entre em contato com um administrador!" });
            case "EMAIL_EXISTS":
                return res.status(409).send({ message: "O email informado já existe!" });
            default:
                return res.status(error.code).send({ message: error.message });
        }
    }
}

export async function signin(req, res) {
    try {
        const data = req.body;
        validate(data);
        await readUser(data);
        return res.sendStatus(200);
    } catch (error) {
        console.log("");
    }
}


function validateSignin(signin) {
    const { error } = signinSchema.validate(signin);
    if (error) throw { code: 422, message: error.message };
}

function validateSignup(signup) {
    const { error } = signupSchema.validate(signup);
    if (error) throw { code: 422, message: error.message };
}
