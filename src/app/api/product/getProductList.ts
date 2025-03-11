export interface Product {
  name: string;
  image: string;
  id: string;
  minPrice: number;
  maxPrice: number;
}

const getProductList = async (userId: string): Promise<Product[]> => {
  // TODO: Fetch product info from database
  return [
    {
      name: "รองเท้า1",
      id: "001",
      image: "/image/emotional-damage.gif",
      minPrice: 100,
      maxPrice: 100,
    },
    {
      name: "รองเท้า2",
      id: "002",
      image: "/image/emotional-damage.gif",
      minPrice: 100,
      maxPrice: 10,
    },
    {
      name: "รองเท้า3",
      id: "003",
      image: "/image/emotional-damage.gif",
      minPrice: 100,
      maxPrice: 500,
    },
  ];
};

export default getProductList;
