import "reflect-metadata";
const express = require("express");
import mainRoute from "./routes/index";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only this origin
    allowedHeaders: "Content-Type,Authorization", // Allow only these headers
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use(express.json());
app.use("/api/v1", mainRoute());

export default app;
