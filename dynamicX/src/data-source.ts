import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Task } from "./entity/Task";
const dotenv = require("dotenv");
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dropSchema: true,
  entities: [User, Task],
  synchronize: false,
  logging: true,
});
AppDataSource.initialize()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Database connection error:", error));
