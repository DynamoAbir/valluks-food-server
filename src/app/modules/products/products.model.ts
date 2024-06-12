import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from './products.interface';


interface IOrderedBy {
    buyerId: string;
    orderDate: Date;
}

interface IProductDocument extends IProduct, Document {}

const orderedBySchema: Schema = new Schema<IOrderedBy>({
    buyerId: { type: String, required: true },
    orderDate: { type: Date, default: Date.now }
});

const productSchema: Schema = new Schema<IProductDocument>({
    productName: { type: String, required: true },
    sellerEmail: { type: String, required: true },
    sellerId: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerImage: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    productImage: { type: String, required: true },
    orderBy: { type: [orderedBySchema], default: [] } // Change orderBy to an array of objects
});

export const ProductModel = mongoose.model<IProductDocument>('Product', productSchema);
