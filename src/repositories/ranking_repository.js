import client from "../db/postgres_db.js";

export async function read() {
    try {
        const { rows: response } = await client.query(`
	        SELECT users.id, users.name, COUNT(urls.id) AS "linksCount", SUM(urls."visitCount") AS "visitCount" FROM users
	        JOIN urls ON users.id = urls."userId"
	        GROUP BY users.id, users.name
	        ORDER BY "visitCount" DESC
	        LIMIT 10
	    `);
        return response;
    } catch (error) {
        console.log(error);
        throw "UNEXPECTED_ERROR";
    }
}