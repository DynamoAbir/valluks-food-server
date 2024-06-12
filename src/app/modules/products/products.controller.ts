import { Request, Response } from "express";
import { ProductService } from "./products.service";
import { SellerService } from "../sellers/serller.service";
import { IProduct } from "./products.interface";
;

const createProduct = async (req: Request, res: Response) => {
    try {
        const { productName, price, description, rating, productImage, sellerEmail } = req.body;

        // Fetch seller information from the seller collection
        const seller = await SellerService.getSellerByEmail(sellerEmail);
        if (!seller) {
            return res.status(404).json({
                success: false,
                message: "Seller not found"
            });
        }

        // Create product with seller information
        const productData:IProduct = {
            productName,
            sellerName: seller.name, // Include seller name here
            sellerEmail: seller.email,
            sellerId: seller._id?.toString() || "", // Ensure _id is handled properly
            sellerImage: seller.image,
            price,
            description,
            rating,
            productImage,
            orderBy:[]
        };

        // Create product
        const result = await ProductService.createProductIntoDB(productData);

        // Update seller's posted products
        await SellerService.updatePostedProducts(seller._id?.toString() || "", result._id?.toString() ||"");

        res.status(200).json({
            success: true,
            message: "Product added successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error
        });
    }
}

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error
        });
    }
}

const getSingleProduct = async (req: Request, res: Response) => {
    const productId = req.params.productId;

    try {
        const result = await ProductService.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product retrieved successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error
        });
    }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct
}
