import mongoose, { Schema, Document } from 'mongoose';
import { IBuyer, ICartItem, IOrderItem } from './buyer.interface';

interface IBuyerDocument extends IBuyer, Document {}

const cartItemSchema: Schema = new Schema<ICartItem>({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerPhoneNumber: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    productImage: { type: String, required: true },
});

const orderItemSchema: Schema = new Schema<IOrderItem>({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerPhoneNumber: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    productImage: { type: String, required: true },
});

const buyerSchema: Schema = new Schema<IBuyerDocument>({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    cart: [cartItemSchema],
    orders: [orderItemSchema],
});

export const BuyerModel = mongoose.model<IBuyerDocument>('Buyer', buyerSchema);
