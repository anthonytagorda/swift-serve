import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";

dotenv.config();

const server = express();

// Database
connectDB();

// Middlewares
server.use(express.json());

// Test route
server.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
