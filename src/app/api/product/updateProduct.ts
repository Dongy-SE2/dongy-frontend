"use server";
import { client } from "@/lib/utils";

export default async function updateProduct(
  data: FormData,
  token: string,
  id: string,
  images: File[],
) {
  const product_name = data.get("product_name")?.toString();
  const product_description = data.get("product_description")?.toString();
  const categories = data.get("categories")?.toString();
  const price = Number(data.get("price")) || 0;
  const res = await client.PUT("/products/{id}", {
    body: { data: { product_name, product_description, price, categories } },
    params: {
      path: {
        id: id as any,
      },
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.response.status === 200 && res.data && images.length > 0) {
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
