import getProductInfo from "@/app/api/product/getProductInfo";
import { auth } from "@/auth";
import ProductEditor from "@/components/ProductEditor";
import ProductManageHeader from "@/components/ProductManageHeader";
import { SessionProvider } from "next-auth/react";
import { redirect, RedirectType } from "next/navigation";

export default async function ProductIDPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const session = await auth();
  if (session === null || !session.user.id)
    redirect("/login", RedirectType.replace);
  const productId = (await params).productId;
  const productInfo = await getProductInfo(productId, session.user.jwt);
  return (
    <SessionProvider>
          <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
            <div className="flex flex-col">
              <ProductManageHeader name="จัดการสินค้า" href="/product/manage" />
              <ProductEditor data={productInfo} />
            </div>

          </div>

    </SessionProvider>
  );
}
