import mongoose, { Schema, Document, model } from 'mongoose';
import { ISeller } from './seller.interface';

interface ISellerDocument extends ISeller, Document {
    _id: string; // Ensure _id is a string here
}

const sellerSchema: Schema = new Schema<ISellerDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String, required: true },
    postedProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }] // Reference to product documents
});

export const SellerModel = model<ISellerDocument>('Seller', sellerSchema);
