export class StoreItem implements BasketItem{

   description: string;
   price: number;

    constructor(description: string, price: number) {
        this.description = description;
        this.price = price;
    }
}