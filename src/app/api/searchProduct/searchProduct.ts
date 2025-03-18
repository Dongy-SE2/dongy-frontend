export class searchProduct{

    product_name : string = '';
    product_description : string = '';
    categories :string = '';
    owner : number | undefined;
    price : number | undefined;

    
    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.product_name) this.product_name = initializer.product_name;
        if(initializer.product_description) this.product_description = initializer.product_description;
        if(initializer.categories) this.categories = initializer.categories;
        if(initializer.owner) this.owner = initializer.owner;
        if(initializer.price) this.price = initializer.price;
    }
}