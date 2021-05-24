interface StoreItemModifier {
    description: string;
    basketItemName: string;
    
    applyTo(basket: any); 

}