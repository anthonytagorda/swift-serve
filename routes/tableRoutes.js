import { Router } from "express";
import {
  addTable,
  getTables,
  updateTable,
} from "../controllers/tableController.js";
import { isVerifiedUser } from "../middleware/token.js";

const router = Router();

// Table Routes
router.post("/", isVerifiedUser, addTable);

router.get("/", isVerifiedUser, getTables);

router.put("/:id", isVerifiedUser, updateTable);

export default router;