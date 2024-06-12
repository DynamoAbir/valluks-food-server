import { ISeller } from "./seller.interface";
import { SellerModel } from "./seller.model";

const createSellerIntoDB = async (seller: ISeller) => {
    const result = await SellerModel.create(seller);
    return result;
}

const getSellerByEmail = async (email: string): Promise<ISeller | null> => {
    const seller = await SellerModel.findOne({ email });
    return seller;
}

const updatePostedProducts = async (sellerId: string, productId: string) => {
    await SellerModel.findByIdAndUpdate(sellerId, { $push: { postedProducts: productId } });
}

export const SellerService = {
    createSellerIntoDB,
    getSellerByEmail, // Export the getSellerByEmail method
    updatePostedProducts
}
