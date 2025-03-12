"use server";

import getProductList from "@/app/api/product/getProductList";
import { auth } from "@/auth";
import ProductListWithSearch from "@/components/ProductListWithSearch";
import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import { redirect } from "next/navigation";

export default async function ProductManagePage() {
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const product_list = await getProductList();
  return (
    <ProductWraper>
      <ProductManageHeader
        name={`ยินดีต้อนรับ คุณ${session.user.username}`}
        href="/product/"
      />
      <ProductListWithSearch products={product_list} />
    </ProductWraper>
  );
}
