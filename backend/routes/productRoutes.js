import express from 'express';
import { getAProductById,getAllProducts } from '../controllers/productsController.js';


const router = express.Router();

router.route('/').get(getAllProducts);

router.route('/:id').get(getAProductById);

export default router;