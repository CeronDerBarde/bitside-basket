import { BuyOneGetOneFreeModifier } from "../app/BuyOneGetOneFreeModifier";
import { Store } from "../app/store";
import { StoreItem } from "../app/StoreItem";
import { TenPercentModifier } from "../app/tenPercentModifier";

describe('Store', () => {

   
    it('should total price without modifiers', () => {
        let store = new Store
        store.createNewBasket()
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0002', 3.99));
        store.basket.getTotal()
        expect(store.basket.total).toEqual(16.98);

    });

    it('should total price with one item 10% off', () => {
        let store = new Store
        store.modifiers.push(new TenPercentModifier('A0001'));
        store.createNewBasket()
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0002', 3.99));
        store.basket.getTotal()
        expect(store.basket.basketItems.length).toEqual(3);
        expect(store.modifiers.length).toEqual(1);
        expect(store.basket.total).toEqual(15.68);

    });

    it('should total price with one item free and two of those items', () => {
        let store = new Store
        store.modifiers.push(new BuyOneGetOneFreeModifier('A0001'));
        store.createNewBasket()
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0002', 3.99));
        store.basket.getTotal()
        expect(store.basket.total).toEqual(16.98);
        expect(store.basket.basketItems.length).toEqual(4);
    });

    it('should total price with one item free and an odd number of those items', () => {
        let store = new Store
        store.modifiers.push(new BuyOneGetOneFreeModifier('A0001'));
        store.createNewBasket()
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0002', 3.99));
        store.basket.getTotal()
        expect(store.basket.total).toEqual(42.96);
        expect(store.basket.basketItems.length).toEqual(8);
    });

    
    it('should not offer free item when only one of them is present', () => {
        let store = new Store
        store.modifiers.push(new BuyOneGetOneFreeModifier('A0001'));
        store.createNewBasket()
        store.basket.addItemToBasket(new StoreItem('A0001', 12.99));
        store.basket.addItemToBasket(new StoreItem('A0002', 3.99));
        store.basket.getTotal()
        expect(store.basket.total).toEqual(16.98);
        expect(store.basket.basketItems.length).toEqual(2);
    });
});