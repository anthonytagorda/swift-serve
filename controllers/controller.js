import createHttpError from "http-errors";
import User from "../models/model.js";

export const register = async (req, res, next) => {
  try {
    const { name, phone, email, password, role } = req.body;

    if (!name || !phone || !email || !password || !role) {
      return next(createHttpError(400, "All fields are required"));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(createHttpError(400, "User already exists"));
    }

    const newUser = await User.create({
      name,
      phone,
      email,
      password,
      role,
    });

    res.status(201).json({
      success: true,
      message: "New user created!",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  res.json({ message: "Login route working" });
};
