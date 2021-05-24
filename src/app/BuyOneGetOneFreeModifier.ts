import { Basket } from "./Basket";
import { StoreItem } from "./StoreItem";

export class BuyOneGetOneFreeModifier implements StoreItemModifier {
    description: string;
    basketItemName: string;

    constructor(basketItemName: string){
        this.basketItemName = basketItemName;
    }
    
    applyTo(basket: Basket) {
         
        let filteredList = basket.basketItems.filter( basketItem => basketItem.description == this.basketItemName);
        let numberOfFreeItems = this.getNumberOfFreeItems(filteredList.length);
        if (numberOfFreeItems == 0) return;
        let price = filteredList[0].price;
       

       for(let i = 0 ; i < numberOfFreeItems ; i++)
       {
        let specialBasketItem = new StoreItem('Special: one free ' + this.basketItemName, price * - 1);
        basket.addItemToBasket(specialBasketItem);
       }
       
    }

    isEven(n) {
        return n % 2 == 0;
     }

     getNumberOfFreeItems(filteredListLength): number{
        if (filteredListLength <= 1) return;
            
        if (this.isEven(filteredListLength)) {
            return filteredListLength / 2
        }
        else {
            return (filteredListLength -1 ) / 2
        }
     }
     


}