import { Store } from "./store";
import { StoreItem } from "./StoreItem";

export class Basket {

    basketItems: BasketItem[];    
    total: number;
    modifiers: StoreItemModifier[];
    
    constructor(modifiers: StoreItemModifier[]) {
        this.total = 0;
        this.basketItems = [];
        this.modifiers = modifiers;

    }

    addItemToBasket(item: BasketItem){
        this.basketItems.push(item);
       
    }

    removeItemfromBasket(basketItem: BasketItem){
       
        this.basketItems.forEach( (item, index) => {
            if(item === basketItem) this.basketItems.splice(index,1);
          });
    }

    clearBasket(){
        this.basketItems = [];
        this.total = 0;
    }

    getTotal(){
        this.total = 0;
        this.applyAllModifiers();
        this.basketItems.forEach(basketItem => this.total += basketItem.price);
        this.total = this.round(this.total, 2);
    }

    applyAllModifiers() {
        this.modifiers.forEach(modifier => {
            modifier.applyTo(this);
        });
    }

    round(number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
}