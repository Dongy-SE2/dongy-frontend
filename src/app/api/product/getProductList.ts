import axios, { AxiosResponse } from "axios";

export interface Product {
  name: string;
  image: string;
  id: string;
  subId: string;
  minPrice: number;
  maxPrice: number;
  categories: string;
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
      categories: string;
    },
  ];
}

const getProductList = async (
  token: string,
  seller_id?: string,
  search_params?: string,
): Promise<Product[]> => {
  let result: AxiosResponse<Response>;
  if (seller_id) {
    result = await axios.get(`${process.env.BACKEND}/api/products/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } else {
    result = await axios.get(
      `${process.env.BACKEND}/api/products?populate=product_image&populate=categories`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  const res: Product[] = result.data.data
    .map((data) => {
      if (data.product_image == null) return null;
      if (
        search_params &&
        search_params.length > 0 &&
        !data.product_name.includes(search_params)
      )
        return;
      return {
        name: data.product_name,
        image: `${process.env.BACKEND}${data.product_image[0].url}?`,
        id: data.documentId,
        subId: data.id.toString(),
        minPrice: data.price,
        maxPrice: 0,
        categories: data.categories,
      };
    })
    .filter((prod) => prod != null);
  return res;
};

export default getProductList;
