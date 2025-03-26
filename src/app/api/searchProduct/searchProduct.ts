const BACKEND_URL = "http://34.135.145.173:1337";

export class searchProduct {
    id: number | undefined;
    documentId: string = '';
    product_name: string = '';
    product_description: string = '';
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
    publishedAt: Date | null = null;
    price: number | undefined;
    product_image: string = ''; // ✅ now just one image string
    categories: string = '';
    owner: string = '';

    constructor(initializer?: any) {
        if (!initializer) return;

        this.id = initializer.id;
        this.documentId = initializer.documentId ?? '';
        this.product_name = initializer.product_name ?? '';
        this.product_description = initializer.product_description ?? '';
        this.createdAt = initializer.createdAt ? new Date(initializer.createdAt) : null;
        this.updatedAt = initializer.updatedAt ? new Date(initializer.updatedAt) : null;
        this.publishedAt = initializer.publishedAt ? new Date(initializer.publishedAt) : null;
        this.price = initializer.price ?? undefined;

        // ✅ Only get the first image's full URL (or fallback to empty string)
        if (Array.isArray(initializer.product_image) && initializer.product_image.length > 0) {
            this.product_image = `${BACKEND_URL}${initializer.product_image[0].url}`;
        } else {
            this.product_image = '';
        }

        this.categories = initializer.categories ?? '';
        this.owner = initializer.owner?.username ?? '';
    }
}
