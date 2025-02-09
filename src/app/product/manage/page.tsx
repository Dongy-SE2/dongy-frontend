"use server";

import getProductList from "@/app/api/product/getProductList";
import ProductList from "@/components/ProductList";
import ProductManageHeader from "@/components/ProductManageHeader";

// TODO: Get the actual userId from the next auth api (server side)
const userId = "0";

export default async function ProductManagePage() {
  const product_list = await getProductList(userId);
  return (
    <>
      <ProductManageHeader name="จัดการสินค้า" href="/product/" />
      <ProductList products={product_list} />
    </>
  );
}
