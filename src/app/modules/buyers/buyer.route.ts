import { Router } from 'express';
import { BuyerController } from './buyer.controller';

const router: Router = Router();

router.post('/create-buyer', BuyerController.createBuyer);
router.post('/add-to-cart', BuyerController.addToCart);
router.post('/place-order', BuyerController.placeOrder);

export const BuyerRoutes = router;
