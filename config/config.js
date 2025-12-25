import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in environment variables");
}

const config = Object.freeze({
  port: process.env.PORT || 3000,
  databaseURI:
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/swiftserve",
  nodeEnv: process.env.NODE_ENV || "development",
  accessTokenSecret: process.env.JWT_SECRET,
});

export default config;
