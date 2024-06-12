import express from 'express';
import { SellerController } from './seller.controller';

const router = express.Router();

router.post('/create-seller', SellerController.createSeller);

export const SellerRoutes = router;
