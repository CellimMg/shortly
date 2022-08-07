import joi from "joi";

const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "any.required": "Você deve informar um email!",
        "string.email": "Formato de email inválido!"
    }),
    password: joi.string().required().messages({
        "any.required": "Você deve informar uma senha!"
    })
});

export default signinSchema;