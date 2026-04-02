import express from 'express';
import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';

const router  = express.Router();



//routes for products
router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id',deleteProduct);
router.put('/:id', updateProduct);

export default router;
