import axios from "axios";
import qs from "qs";

export interface Product {
  name: string;
  image: string;
  id: string;
  subId: string;
  minPrice: number;
  maxPrice: number;
}

const getProductList = async (
  seller_id?: string,
  token?: string,
): Promise<Product[]> => {
  // TODO: Fetch product info from database
  let result = null;
  if (seller_id && token) {
    result = await axios.get(
      `${process.env.BACKEND}/api/products?pop…age&populate=product_image&populate=owner`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  } else {
    result = await axios.get(
      `${process.env.BACKEND}/api/products?pop…age&populate=categories&populate=product_image`,
    );
  }

  const res: Product[] = result.data.data.map((data: any) => ({
    name: data.product_name,
    image: `${process.env.BACKEND}${data.product_image[0].formats.small.url}`,
    id: data.documentId,
    subId: data.id,
    minPrice: data.price,
    maxPrice: 0,
  }));
  return res;
};

export default getProductList;
