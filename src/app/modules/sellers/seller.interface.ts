export interface ISeller {
    _id?: string; // Make _id optional and of type string
    name: string;
    email: string;
    phoneNumber: string;
    image: string;
    postedProducts: string[]; // Array of product IDs posted by the seller
}
