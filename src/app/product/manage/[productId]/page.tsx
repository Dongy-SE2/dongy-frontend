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
      <ProductManageHeader name="จัดการสินค้า" href="/product/manage" />
      <ProductEditor data={productInfo} />
    </SessionProvider>
  );
}
