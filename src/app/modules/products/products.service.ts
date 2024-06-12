import { IProduct } from "./products.interface";
import { ProductModel } from "./products.model";



export class ProductService {
    static async createProductIntoDB(productData: IProduct) {
        const product = new ProductModel(productData);
        return await product.save();
    }

    static async getAllProductsFromDB() {
        return await ProductModel.find();
    }

    static async getSingleProductFromDB(productId: string) {
        return await ProductModel.findById(productId);
    }

    static async updateOrderBy(productId: string, buyerId: string) {
        return await ProductModel.findByIdAndUpdate(
            productId,
            { $push: { orderBy: { buyerId, orderDate: new Date() } } },
            { new: true }
        );
    }
}
