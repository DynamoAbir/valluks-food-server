import { Request, Response } from "express";
import { SellerService } from "./serller.service";


const createSeller = async (req: Request, res: Response) => {
    try {
        const seller = req.body;
        const result = await SellerService.createSellerIntoDB(seller);

        res.status(200).json({
            success: true,
            message: "Seller added successfully",
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

export const SellerController = {
    createSeller
}
