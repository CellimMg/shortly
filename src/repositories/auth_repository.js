import client from "../db/postgres_db.js";


export async function createUser(user) {


    const { name, email, password } = user;
    try {
        await client.query(
            'INSERT INTO "users" (name, email, password) VALUES ($1, $2, $3)', [
            name, email, password
        ]);
    } catch (error) {
        if (error.detail && error.detail.includes("already exists")) throw { code: 409, message: "Este email já está cadastrado!" };
        throw { code: 500, message: "Ocorreu um erro ao consultar o banco de dados!" };
    }
}