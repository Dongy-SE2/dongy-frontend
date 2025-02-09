import getProductInfo from "@/app/api/product/getProductInfo";
import ProductEditor from "@/components/ProductEditor";
import ProductManageHeader from "@/components/ProductManageHeader";

export default async function ProductIDPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  const productInfo = await getProductInfo(productId);
  return (
    <>
      <ProductManageHeader name="จัดการสินค้า" href="/product/manage" />
      <ProductEditor data={productInfo} />
    </>
  );
}
