import client from "../db/postgres_db.js";

export async function createUser(user) {
    const { name, email, password } = user;
    try {
        await client.query(
            'INSERT INTO "users" (name, email, password) VALUES ($1, $2, $3)', [
            name, email, password
        ]);
    } catch (error) {
        if (error.detail && error.detail.includes("already exists")) throw "EMAIL_EXIST";
        throw "UNEXPECTED_ERROR";
    }
}


export async function readUser(user) {
    const { email, password } = user;
    try {
        const { rows } = await client.query(
            'SELECT * FROM "users" WHERE "users".email = $1 AND "users".password = $2', [
            email, password
        ]);
        return rows;
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}