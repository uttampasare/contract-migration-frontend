import { Product } from "./product.model";

export interface Customer{
    id: string;
    name: string;
    address: string;
    products: Product[];
}