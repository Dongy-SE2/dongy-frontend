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
  liveDId: string;
}

const getProductInfo = async (
  productDId: string,
  token: string,
): Promise<ProductInfo> => {
  const url = `${process.env.BACKEND}/api/products/${productDId}`;
  console.log(url);
  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = res.data.data;
  console.log(data);
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
    liveDId: data.lives[0]?.documentId || null,
  };
};

export default getProductInfo;
