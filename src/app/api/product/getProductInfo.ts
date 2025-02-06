enum ProductType {
  // TODO: Talk with backend
  รองเท้า,
}

export interface ProductInfo {
  name: string;
  id: string;
  type: ProductType;
  minPrice: number;
  description: string;
  image: string[];
}

const getProductInfo = async (productId: string): Promise<ProductInfo> => {
  // TODO: Fetch productId
  return {
    name: "รองเท้า1",
    type: 0,
    id: "001",
    minPrice: 1600,
    description: "",
    image: ["/image/emotional-damage.gif"],
  };
};

export default getProductInfo;
