import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import config from "./config/config.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import userRoutes from "./routes/routes.js";

dotenv.config();

const server = express();

// Middlewares
server.use(express.json());

// Root Endpoint
server.get("/", (req, res) => {
  res.send("Server is running!");
});

// Other Endpoints
server.use("/api/user", userRoutes);

// Global Error Handler (must be AFTER routes)
server.use(globalErrorHandler);

// Start server AFTER DB connection
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
