import Table from "../models/tableModel.js";
import createHttpError from "http-errors";

/* ================= ADD TABLE ================= */
export const addTable = async (req, res, next) => {
  try {
    const { tableNo } = req.body;

    if (!tableNo) {
      return next(createHttpError(400, "Please provide table number"));
    }

    const parsedTableNo = Number(tableNo);
    if (isNaN(parsedTableNo)) {
      return next(createHttpError(400, "Table number must be a number"));
    }

    const isTableAvailable = await Table.findOne({ tableNo: parsedTableNo });

    if (isTableAvailable) {
      return next(createHttpError(400, "Table already exists!"));
    }

    const newTable = await Table.create({ tableNo: parsedTableNo });

    res.status(201).json({
      success: true,
      message: "Table added!",
      data: newTable,
    });
  } catch (error) {
    next(error);
  }
};

/* ================= GET ALL TABLES ================= */
export const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find();
    res.status(200).json({ success: true, data: tables });
  } catch (error) {
    next(error);
  }
};

/* ================= UPDATE TABLE ================= */
export const updateTable = async (req, res, next) => {
  try {
    const { tableStatus, orderId } = req.body;
    const table = await Table.findByIdAndUpdate(
      req.params.id,
      { tableStatus, currentOrder: orderId },
      { new: true }
    );

    if (!table) {
      return next(createHttpError(404, "Table not found!"));
    }

    res
      .status(200)
      .json({ success: true, message: "Table updated!", data: table });
  } catch (error) {
    next(error);
  }
};
