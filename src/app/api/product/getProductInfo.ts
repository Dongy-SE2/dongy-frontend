import axios from "axios";

enum ProductType {
  // TODO: Talk with backend
  เสื้อผ้า,
  เครื่องเรือน,
  ของสะสม,
  หนังสือ,
  อื่นๆ,
}

export interface ProductInfo {
  name: string;
  seller: string;
  id: string;
  subId: string;
  type: ProductType;
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
    image: data.product_image.map(
      (img: any) => `${process.env.BACKEND}${img.formats.small.url}`,
    ),
    id: data.documentId,
    subId: data.id,
    minPrice: data.price,
    type: 3,
    seller: "manima",
    description: data.product_description,
  };
};

export default getProductInfo;
