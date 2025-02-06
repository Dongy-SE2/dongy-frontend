export interface Product {
  name: string;
  image: string;
  id: string;
  minPrice: number;
}

const getProductList = async (userId: string): Promise<Product[]> => {
  // TODO: Fetch product info from database
  return [
    {
      name: "รองเท้า1",
      id: "001",
      image: "/image/emotional-damage.gif",
      minPrice: 100,
    },
    {
      name: "รองเท้า2",
      id: "002",
      image: "/image/emotional-damage.gif",
      minPrice: 100,
    },
    {
      name: "รองเท้า3",
      id: "003",
      image: "/image/emotional-damage.gif",
      minPrice: 100,
    },
  ];
};

export default getProductList;
