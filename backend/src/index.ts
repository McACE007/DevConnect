import express from "express";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

app.listen(3001, () => {
    console.log("Server is running...");
})