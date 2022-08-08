import client from "../db/postgres_db.js";

export async function create(object) {
    const { userId, url, shortUrl } = object;
    try {
        const { rows: response } = await client.query(
            'INSERT INTO urls ("userId", url, "shortUrl", "visitCount") VALUES ($1, $2, $3, 0)',
            [userId, url, shortUrl]
        );
        return response;
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}

export async function readById(id) {
    try {
        const { rows: response } = await client.query(
            'SELECT id, "shortUrl", url FROM urls WHERE id = $1',
            [id]
        );
        return response;
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}

export async function readByShortUrl(url) {
    try {
        const { rows: response } = await client.query(
            'SELECT url FROM urls WHERE "shortUrl" = $1',
            [url]
        );
        return response;
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}

export async function updateVisitCount(url) {
    try {
        await connection.query(
            'UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1',
            [url]
        );
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}

export async function readIdAndUserId(id, userId) {
    try {
        const { rows: response } = await client.query(
            'SELECT * FROM urls WHERE id = $1 AND "userId" = $2',
            [id, userId]
        );
        return response;
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}

export async function deleteById(id) {
    try {
        await client.query(
            'DELETE FROM urls WHERE id = $1',
            [id]
        );
    } catch (error) {
        throw "UNEXPECTED_ERROR";
    }
}