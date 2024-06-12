import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.get('/get-all-products', ProductController.getAllProduct);
router.get('/:productId', ProductController.getSingleProduct);
router.post('/create-product', ProductController.createProduct);

export const ProductRoutes = router;
