import { Request, Response } from 'express';
import { BuyerService } from './buyer.service';
import { ProductService } from '../products/products.service';

const createBuyer = async (req: Request, res: Response) => {
    try {
        const buyerData = req.body;
        const buyer = await BuyerService.createBuyer(buyerData);
        res.status(201).json({
            success: true,
            message: "Buyer created successfully",
            data: buyer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error
        });
    }
};

const addToCart = async (req: Request, res: Response) => {
    try {
        const { buyerId, cartItem } = req.body;

        // Fetch buyer information
        const buyer = await BuyerService.getBuyerById(buyerId);
        if (!buyer) {
            return res.status(404).json({
                success: false,
                message: "Buyer not found"
            });
        }

        // Validate product existence
        const product = await ProductService.getSingleProductFromDB(cartItem.productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Add product to buyer's cart
        const updatedBuyer = await BuyerService.addProductToCart(buyerId, cartItem);

        res.status(200).json({
            success: true,
            message: "Product added to cart successfully",
            data: updatedBuyer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error
        });
    }
};

const placeOrder = async (req: Request, res: Response) => {
    try {
        const { buyerId, orderItem } = req.body;

        // Fetch buyer information
        const buyer = await BuyerService.getBuyerById(buyerId);
        if (!buyer) {
            return res.status(404).json({
                success: false,
                message: "Buyer not found"
            });
        }

        // Validate product existence
        const product = await ProductService.getSingleProductFromDB(orderItem.productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Place order and update product's orderedBy array
        const updatedBuyer = await BuyerService.placeOrder(buyerId, orderItem);
        product.orderBy.push({ buyerId, orderDate: orderItem.orderDate });
        await product.save();

        res.status(200).json({
            success: true,
            message: "Order placed successfully",
            data: updatedBuyer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error
        });
    }
};

export const BuyerController = {
    createBuyer,
    addToCart,
    placeOrder
};
