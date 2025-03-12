"use server";
import axios from "axios";

export default async function createProduct(
  data: FormData,
  token: string,
  userId: string,
) {
  const product_name = data.get("product_name")?.toString();
  const product_description = data.get("product_description")?.toString();
  const categories = data.get("categories")?.toString();
  const price = data.get("price")?.toString();
  try {
    axios.post(`${process.env.BACKEND}/api/products/`, {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        product_name,
        product_description,
        categories,
        price,
        owner: userId,
      },
    });
  } catch (e) {
    console.error(e);
  }
}
