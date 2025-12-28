import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import config from "./config/config.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const server = express();

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// Root Endpoint
server.get("/", (req, res) => {
  res.send("Server is running!");
});

// Other Endpoints
server.use("/api/user", userRoutes);
server.use("/api/orders", orderRoutes);

// Global Error Handler
server.use(globalErrorHandler);

// Start server
const startServer = async () => {
  try {
    await connectDB();

    server.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
