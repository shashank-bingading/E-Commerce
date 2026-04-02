import express from "express";
import {
  getOrders,
  getMyOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect,admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//router for orders

router.get("/", admin, getOrders);
router.get("/my-orders", protect, getMyOrders);
router.post("/", protect, createOrder);
router.get("/:id",protect, getOrderById);
router.delete("/:id", admin, deleteOrder);
router.put("/:id", admin, updateOrder);

export default router;
