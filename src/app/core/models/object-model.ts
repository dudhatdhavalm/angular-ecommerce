export class User {
    // No changes needed for this class in Angular 12 upgrade
    aboutYou: string;
    age: number;
    agreetc: boolean;
    dob: string;
    email: string;
    gender: string;
    address: Address;
    language: string;
    mobNumber: string
    name: string;
    password: string;
    // uploadPhoto: Image;
    uploadPhoto: string;
    role: string;
}

export class Address {
    // No changes needed for this class in Angular 12 upgrade
    id: number;
    addLine1: string;
    addLine2: string;
    city: string;
    state: string;
    zipCode: number;
}

export class Product {
    // No changes needed for this class in Angular 12 upgrade
    id: number;
    name: string;
    uploadPhoto: string;
    productDesc: string;
    mrp: number;
    dp: number;
    status: boolean;
}

export class Order {
    // No changes needed for this class in Angular 12 upgrade
    id: number;
    userId: number;
    sellerId: number;
    product: Product;
    deliveryAddress: Address;
    contact: Number;
    dateTime: string;
}