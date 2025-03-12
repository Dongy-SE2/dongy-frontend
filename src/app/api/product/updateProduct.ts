"use server";
import axios from "axios";

export default async function updateProduct(
  data: FormData,
  token: string,
  id: string,
) {
  const product_name = data.get("product_name")?.toString();
  const product_description = data.get("product_description")?.toString();
  const categories = data.get("categories")?.toString();
  const price = data.get("price")?.toString();
  try {
    axios.put(`${process.env.BACKEND}/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { product_name, product_description, categories, price },
    });
  } catch (e) {
    console.error(e);
  }
}
