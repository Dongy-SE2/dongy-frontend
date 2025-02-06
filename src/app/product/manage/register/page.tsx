import ProductEditor from "@/components/ProductEditor";
import ProductManageHeader from "@/components/ProductManageHeader";

export default async function ProductRegisterPage({}: {
  params: Promise<{ productId: string }>;
}) {
  return (
    <>
      <ProductManageHeader name="เพิ่มสิ้นค้า" href="/product/manage" />
      <ProductEditor
        data={{
          name: "",
          id: "",
          minPrice: 0,
          description: "",
          image: [],
          type: 0,
        }}
      />
    </>
  );
}
