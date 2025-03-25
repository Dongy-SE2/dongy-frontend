"use server";

import { client } from "@/lib/utils";

export default async function updateBuyerOrderState(
  orderId: string,
  token: string,
) {
  const { response } = await client.PUT("/orders/{id}", {
    params: { path: { id: orderId as any } },
    body: { data: { state: "ได้รับสินค้าแล้ว" } },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return { ok: response.ok, error: response.statusText };
}
