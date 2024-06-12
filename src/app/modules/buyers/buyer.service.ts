import { BuyerModel } from './buyer.model';
import { ICartItem, IOrderItem } from './buyer.interface';

const createBuyer = async (buyerData: any) => {
    const buyer = new BuyerModel(buyerData);
    return buyer.save();
};

const getBuyerById = async (buyerId: string) => {
    return BuyerModel.findById(buyerId);
};

const addProductToCart = async (buyerId: string, cartItem: ICartItem) => {
    const buyer = await BuyerModel.findById(buyerId);
    if (!buyer) throw new Error("Buyer not found");

    buyer.cart.push(cartItem);
    await buyer.save();
    return buyer;
};

const placeOrder = async (buyerId: string, orderItem: IOrderItem) => {
    const buyer = await BuyerModel.findById(buyerId);
    if (!buyer) throw new Error("Buyer not found");

    // Add order to buyer's orders array
    buyer.orders.push(orderItem);

    // Remove the ordered item from the cart
    buyer.cart = buyer.cart.filter(item => item.productId !== orderItem.productId);

    await buyer.save();
    return buyer;
};

export const BuyerService = {
    createBuyer,
    getBuyerById,
    addProductToCart,
    placeOrder
};
