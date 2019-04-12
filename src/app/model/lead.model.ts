import { Interaction } from "./interaction.model";

export interface Lead{
    id : string;
    name : string;
    address : string;
    interactions: Interaction[];
}