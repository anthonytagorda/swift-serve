import config from "../config/config.js";

const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error",
        errorStack:
            config.nodeEnv === "development" ? err.stack : undefined,
    });
};

export default globalErrorHandler;
