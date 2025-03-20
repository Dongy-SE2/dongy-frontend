export class searchProduct{

    id: number | undefined;
    documentId: string = '';
    product_name : string = '';
    product_description : string = '';
    createAt : Date | null = null;
    updatedAt : Date | null = null;
    publishedAt : Date | null = null;
    price : number | undefined;
    product_image : string = '';
    categories :string = '';
    owner : number | undefined;

    
    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.documentId) this.documentId = initializer.documentId;
        if(initializer.product_name) this.product_name = initializer.product_name;
        if(initializer.product_description) this.product_description = initializer.product_description;
        if(initializer.createAt) this.createAt = initializer.createAt;
        if(initializer.updatedAt) this.updatedAt = initializer.updatedAt;
        if(initializer.publishedAt) this.publishedAt = initializer.publishedAt;
        if(initializer.price) this.price = initializer.price;
        if(initializer.product_image) this.product_image = initializer.product_image;
        if(initializer.categories) this.categories = initializer.categories;
        if(initializer.owner) this.owner = initializer.owner;
    }
}