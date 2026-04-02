import express from 'express';
import { 
    registerUser, 
    authUser, 
    getUserProfile, 
    updateUserProfile 
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

//routes for users

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile',protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;