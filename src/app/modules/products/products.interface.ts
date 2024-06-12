export interface IProduct {
    productName: string;
    sellerEmail: string;
    sellerId: string;
    sellerName: string;
    sellerImage: string;
    price: number; // Ensure price is a number
    description: string;
    rating: number; // Ensure rating is a number
    productImage: string;
    orderBy: { buyerId: string, orderDate: Date }[]; // Ensure orderBy is an array of objects
}
