import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const server = express();

// Middlewares
server.use(express.json());

// Test route
server.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start server
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
