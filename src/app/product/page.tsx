"use server";

import getProductList from "@/app/api/product/getProductList";
import { auth } from "@/auth";
import ProductListWithSearch from "@/components/search/ProductListWithSearch";
import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import { redirect } from "next/navigation";

export default async function ProductManagePage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string }>;
}) {
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const search = await searchParams;
  const product_list = await getProductList(
    session.user.jwt,
    undefined,
    search ? search.search : undefined,
  );

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
      <ProductWraper>
        <ProductManageHeader
          name={`ยินดีต้อนรับ คุณ${session.user.username}`}
          href="/user"
        />
        <ProductListWithSearch product_list={product_list} />
      </ProductWraper>
    </div>
  );
}
