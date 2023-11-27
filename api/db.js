import mysql from "mysql";

import dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.SERVER_NAME,
  user: process.env.LOGIN_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.PORT,
});
