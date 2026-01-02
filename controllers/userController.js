import createHttpError from "http-errors";
import User from "../models/userModel.js";
import config from "../config/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* ================= REGISTER ================= */
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      phone,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "New user created!",
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* ================= LOGIN ================= */
export const login = async (req, res, next) => {
  try {
    if (!req.body) {
      return next(createHttpError(400, "Request body missing or invalid JSON"));
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return next(createHttpError(400, "Email and password are required"));
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return next(createHttpError(401, "Invalid credentials"));
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return next(createHttpError(401, "Invalid credentials"));
    }

    const accessToken = jwt.sign(
      { id: existingUser._id },
      config.accessTokenSecret,
      { expiresIn: "1d" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "lax",
      secure: false,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      accessToken,
      data: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* ================= GET USER DATA ================= */
export const getUserData = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

/* ================= LOGOUT ================= */
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.status(200).json({
      success: true,
      message: "User logged out",
    });
  } catch (error) {
    next(error);
  }
};
