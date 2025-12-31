import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  tableNo: { type: Number, required: true, unique: true },
  tableStatus: {
    type: String,
    enum: [
      "available",
      "occupied",
      "reserved",
      "cleaning",
      "maintenance",
      "unavailable",
    ],
    default: "available",
  },
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
});

const Table = mongoose.model("Table", tableSchema);
export default Table;
