import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const client = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default client;