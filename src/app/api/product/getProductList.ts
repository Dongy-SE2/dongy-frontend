import axios, { AxiosResponse } from "axios";

export interface Product {
  name: string;
  image: string;
  id: string;
  subId: string;
  minPrice: number;
  maxPrice: number;
}

interface Response {
  data: [
    {
      id: number;
      documentId: string;
      product_name: string;
      product_description: string;
      createAt: string;
      updateAt: string;
      publishAt: string;
      price: number;
      product_image?: any[];
    },
  ];
}

const getProductList = async (
  token: string,
  seller_id?: string,
): Promise<Product[]> => {
  let result: AxiosResponse<Response>;
  if (seller_id) {
    result = await axios.get<Response>(
      `${process.env.BACKEND}/api/products/me`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  } else {
    result = await axios.get<Response>(
      `${process.env.BACKEND}/api/products?populate=product_image&populate=categories`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  const res: Product[] = result.data.data
    .map((data) => {
      if (data.product_image == null) return null;
      return {
        name: data.product_name,
        image: `${process.env.BACKEND}${data.product_image[0].url}`,
        id: data.documentId,
        subId: data.id.toString(),
        minPrice: data.price,
        maxPrice: 0,
      };
    })
    .filter((prod) => prod != null);
  return res;
};

export default getProductList;
