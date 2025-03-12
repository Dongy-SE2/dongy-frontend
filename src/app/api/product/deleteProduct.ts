import axios from "axios";

export default async function deleteProduct(productId: string, token: string) {
  try {
    axios.delete(`${process.env.BACKEND}/api/products/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.error(e);
  }
}
