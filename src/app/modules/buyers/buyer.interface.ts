export interface IBuyer {
    name: string;
    phoneNumber: string;
    address: string;
    email: string;
    image: string;
    cart: ICartItem[];
    orders: IOrderItem[];
}

export interface ICartItem {
    productId: string;
    productName: string;
    sellerName: string;
    sellerPhoneNumber: string;
    price: number;
    description: string;
    productImage: string;
}

export interface IOrderItem {
    productId: string;
    productName: string;
    sellerName: string;
    sellerPhoneNumber: string;
    price: number;
    description: string;
    productImage: string;
}