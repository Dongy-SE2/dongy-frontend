import ProductEditor from "@/components/ProductEditor";
import ProductManageHeader from "@/components/ProductManageHeader";
import { SessionProvider } from "next-auth/react";

export default async function ProductRegisterPage({}: {
  params: Promise<{ productId: string }>;
}) {
  return (
    <SessionProvider>
      <ProductManageHeader name="เพิ่มสิ้นค้า" href="/user/" />
      <ProductEditor
        data={{
          name: "",
          subId: "",
          seller: "",
          id: "",
          minPrice: 0,
          description: "",
          image: [],
          type: "",
          liveDId: "",
        }}
      />
    </SessionProvider>
  );
}
