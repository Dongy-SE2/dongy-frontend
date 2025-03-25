import ProductEditor from "@/components/ProductEditor";
import ProductManageHeader from "@/components/ProductManageHeader";
import { SessionProvider } from "next-auth/react";

export default async function ProductRegisterPage({}: {
  params: Promise<{ productId: string }>;
}) {
  return (
    <SessionProvider>


    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
    

      <div className="flex flex-col">

      <ProductManageHeader name="เพิ่มสินค้า" href="/user/" />
      <ProductEditor
          data={{
            name: "",
            subId: "",
            seller: "",
            id: "",
            minPrice: 0,
            description: "",
            image: [],
            type: 0,
          }}/>

      </div>
    </div>
    </SessionProvider>

    
  );
}
