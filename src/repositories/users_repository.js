import client from "../db/postgres_db.js";

export async function readUserUrls(userId) {
    try {
        const { rows: response } = await client.query(
            'SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE "userId" = $1',
            [userId]
        );
        return response;
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}

export async function readUser(id) {
    try {
        const { rows: response } = await client.query(
            'SELECT users.id AS id, users.name, SUM(urls."visitCount") AS "visitCount" FROM users' +
            ' JOIN urls ON users.id = urls."userId"' +
            ' WHERE users.id = $1' +
            ' GROUP BY users.id',
            [id]
        );
        return response[0];
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}