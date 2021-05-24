import { Basket } from "./Basket";
import { StoreItem } from "./StoreItem";

export class Store {

    basket: Basket;
    // static inventory: StoreItem[];
    modifiers: StoreItemModifier[];

    constructor() {
        // Store.inventory = [new StoreItem('AAA01', 12.99),
        //                   new StoreItem('AAA02', 3.99)
        // ];
        this.modifiers = [];

    }

    createNewBasket(){
        this.basket = new Basket(this.modifiers);
    }
    
}