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
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-6">
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
