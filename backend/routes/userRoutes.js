import express from 'express';
import {login,getProfile,registerUser} from '../controllers/userController.js';
import {protect} from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(login)
router.route('/profile').get(protect,getProfile)
export default router;