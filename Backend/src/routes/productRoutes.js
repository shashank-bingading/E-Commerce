import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes for products
router.get("/",  getProducts);
router.post("/", protect,admin, createProduct);
router.get("/:id", getProductById);
router.delete("/:id", protect,admin, deleteProduct);
router.put("/:id", protect,admin, updateProduct);

export default router;
