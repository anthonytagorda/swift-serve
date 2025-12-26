import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import User from "../models/userModel.js";

export const isVerifiedUser = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return next(createHttpError(401, "Please provide token!"));
    }

    const decoded = jwt.verify(accessToken, config.accessTokenSecret);

    const user = await User.findById(decoded.id);
    if (!user) {
      return next(createHttpError(401, "User does not exist"));
    }

    req.user = user;
    next();
  } catch (error) {
    next(createHttpError(401, "Invalid or expired token"));
  }
};
