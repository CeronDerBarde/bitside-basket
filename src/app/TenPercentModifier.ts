import { Basket } from "./Basket";
import { StoreItem } from "./StoreItem";


export class TenPercentModifier implements StoreItemModifier {
    
    description: string;
    basketItemName: string;

    constructor(basketItemName: string){
        this.basketItemName = basketItemName;
    }
    
    applyTo(basket: Basket) {
         
        let filteredList = basket.basketItems.filter( basketItem => basketItem.description == this.basketItemName);
        filteredList.forEach( basketItem =>  {
            let tenPercentPrice = basket.round(basketItem.price * 0.1, 2);
            let specialBasketItem = new StoreItem('10 % Discount for ' + this.basketItemName, tenPercentPrice * - 1);
            basket.addItemToBasket(specialBasketItem);
        }
        )

    }

}