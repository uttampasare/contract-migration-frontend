import { Product } from "./product.model";
import { Interaction } from "./interaction.model";

export interface Customer{
    id: string;
    name: string;
    address: string;
    products: Product[];
    interactions: Interaction[];
}