"use server";
import { client } from "@/lib/utils";

export default async function createProduct(
  data: FormData,
  token: string,
  username: string,
  images: File[],
) {
  const product_name = data.get("product_name")?.toString();
  const product_description = data.get("product_description")?.toString();
  const categories = data.get("categories")?.toString();
  const price = Number(data.get("price")?.toString()) || 1;
  const res = await client.POST("/products", {
    body: {
      data: {
        product_name,
        product_description,
        categories,
        owner: username,
        price,
      },
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (res.response.status === 201 && res.data) {
    const formData = new FormData();
    for (const image of images as any) {
      formData.append("files", image);
    }

    formData.append("ref", "api::product.product");
    formData.append("refId", res.data.data?.id?.toString() || "");
    formData.append("field", "product_image");
    const upload = await client.POST("/upload", {
      body: formData as any,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return upload.response.status;
  } else {
    console.log(res);
    return res.response.status;
  }
}
