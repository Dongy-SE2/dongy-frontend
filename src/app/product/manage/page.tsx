"use server";

import getProductList from "@/app/api/product/getProductList";
import ProductList from "@/components/ProductList";
import ProductManageHeader from "@/components/ProductManageHeader";
import { auth } from "@/auth";
import { redirect, RedirectType } from "next/navigation";
import { SessionProvider } from "next-auth/react";

// TODO: Get the actual userId from the next auth api (server side)

export default async function ProductManagePage() {
  const session = await auth();
  if (session === null || !session.user.id)
    redirect("/login", RedirectType.replace);
  const product_list = await getProductList(session.user.id, session.user.jwt);
  return (
    <SessionProvider>
      <ProductManageHeader name="จัดการสินค้า" href="/product/" />
      <ProductList products={product_list} />
    </SessionProvider>
  );
}
