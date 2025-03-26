"use server";

import getProductList from "@/app/api/product/getProductList";
import { auth } from "@/auth";
import ProductListWithSearch from "@/components/ProductListWithSearch";
import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import { redirect } from "next/navigation";
import { searchProduct } from "../api/searchProduct/searchProduct";
import { searchProductAPI } from "../api/searchProduct/searchProductAPI";

export default async function ProductManagePage() {
  

  //auth
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const product_list = await getProductList(session.user.jwt);


  

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
   <ProductWraper>
        <ProductManageHeader
          name={`ยินดีต้อนรับ คุณ${session.user.username}`}
          href="/user"
        />
        <ProductListWithSearch  />
      </ProductWraper>

    </div>
  );
}
