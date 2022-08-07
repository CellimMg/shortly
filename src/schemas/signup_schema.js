import joi from "joi";

const signupSchema = joi.object({
    name: joi.string().min(4).required().messages({
        'string.min': "O nome deve ter pelo menos 4 caracteres!",
        'string.empty': "Você deve informar um nome!",
        'any.required': "Você deve informar um nome!",
        'array.min': "O nome deve possuir ao menos 4 caracteres!"
    }),
    email: joi.string()
        .email()
        .required().messages({
            "any.required": "Você deve informar o email!",
            "string.email": "Formato de email inválido!",
            "string.empty": "Você deve informar um email!"
        }),
    password: joi.string().min(6).required().messages({
        "any.required": "Você deve informar a senha!",
        "array.min": "A senha deve ter pelo menos 6 caracteres!",
        "string.empty": "Você deve informar a senha!"
    }),
    confirmPassword: joi.valid(joi.ref('password')).required().messages({
        "any.only": "A confirmação deve ser igual à senha!",
        "any.required": "Você deve confirmar a senha!"
    })
});

export default signupSchema;