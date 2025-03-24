"use server";
import { client } from "@/lib/utils";

export default async function deleteProduct(productId: string, token: string) {
  const res = await client.DELETE(`/products/{id}`, {
    params: { path: { id: productId as any } },
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.response.status;
}
