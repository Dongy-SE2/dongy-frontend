import axios from "axios";

export interface ProductInfo {
  name: string;
  seller: string;
  id: string;
  subId: string;
  type: string;
  minPrice: number;
  description: string;
  image: string[];
}

const getProductInfo = async (
  productId: string,
  token: string,
): Promise<ProductInfo> => {
  // TODO: Fetch productId
  const res = await axios.get(
    `${process.env.BACKEND}/api/products?filters[id]=${productId}&populate=*`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  const data = res.data.data[0];
  return {
    name: data.product_name,
    image: data.product_image
      .map((img: any) => {
        return `${process.env.BACKEND}${img.url}`;
      })
      .reverse(),
    id: data.documentId,
    subId: data.id,
    minPrice: data.price,
    type: data.categories,
    seller: data.owner.username,
    description: data.product_description,
  };
};

export default getProductInfo;
