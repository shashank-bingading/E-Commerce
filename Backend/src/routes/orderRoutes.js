import express from 'express';
import { getOrders, createOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

//router for orders

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOrderById);
router.delete(':id', deleteOrder);
router.put('/:id', updateOrder);

export default router;