import mongoose from "mongoose";
import Order from "../models/orderModel.js";
import createHttpError from "http-errors";

/* ================= ADD ORDER ================= */
export const addOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: "Order created",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

/* ================= GET ALL ORDERS ================= */
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

/* ================= GET ORDER ID ================= */
export const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createHttpError(404, "Invalid ID"));
    }

    const order = await Order.findById(id);

    if (!order) {
      return next(createHttpError(404, "Order not found"));
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

/* ================= UPDATE ORDER ================= */
export const updateOrder = async (req, res, next) => {
  try {
    const { orderStatus } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createHttpError(404, "Invalid ID"));
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return next(createHttpError(404, "Order not found"));
    }

    res.status(200).json({
      success: true,
      message: "Order updated",
      data: updatedOrder,
    });
  } catch (error) {
    next(error);
  }
};
