import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        if (!config.databaseURI) {
            throw new Error("MONGODB_URI is not defined in .env");
        }

        const conn = await mongoose.connect(config.databaseURI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
