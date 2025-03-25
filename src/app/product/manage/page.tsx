"use server";

import getProductList from "@/app/api/product/getProductList";
import ProductList from "@/components/ProductList";
import ProductManageHeader from "@/components/ProductManageHeader";
import { auth } from "@/auth";
import { redirect, RedirectType } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default async function ProductManagePage() {
  const session = await auth();
  if (session === null || !session.user.id)
    redirect("/login", RedirectType.replace);
  const product_list = await getProductList(session.user.jwt, session.user.id);
  return (

    <SessionProvider>
        <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
          <div className="flex flex-col">
            <ProductManageHeader name="จัดการสินค้า" href="/user/" />
            <ProductList products={product_list} />
          </div>

        </div>
    </SessionProvider>
  );
}
