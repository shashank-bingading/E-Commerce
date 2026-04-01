import express from 'express';
import { 
    registerUser, 
    authUser, 
    getUserProfile, 
    updateUserProfile 
} from '../controllers/userController.js';

const router = express.Router();

//routes for users

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

export default router;