import express from "express";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
