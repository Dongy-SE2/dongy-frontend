"use server";

import getProductList from "@/app/api/product/getProductList";
import { auth } from "@/auth";
import ProductListWithSearch from "@/components/ProductListWithSearch";
import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import { redirect } from "next/navigation";

export default async function OrderManagePage() {
//   const session = await auth();
//   if (session === null || !session.user.id) redirect("/login");
//   const product_list = await getProductList();
  return (
    <div>order manage page</div>
  );
}
