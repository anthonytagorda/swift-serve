import { Router } from "express";
import {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
} from "../controllers/orderController.js";
import { isVerifiedUser } from "../middleware/token.js";

const router = Router();

// Ordering Routes
router.post("/", isVerifiedUser, addOrder);

router.get("/", isVerifiedUser, getOrders);
router.get("/:id", isVerifiedUser, getOrderById);

router.put("/:id", isVerifiedUser, updateOrder);

export default router;
