"use client";
import { ProductInfo } from "@/app/api/product/getProductInfo";
import ProductImageSelector from "./ProductImageSelector";
import ProductInput from "./ProductInput";
import updateProduct from "@/app/api/product/updateProduct";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import createProduct from "@/app/api/product/createProduct";

interface Props {
  data: ProductInfo;
}
const ProductEditor: React.FC<Props> = ({ data }) => {
  const session = useSession();
  const location = usePathname();
  return (
    <form
      className="flex justify-between pt-5"
      action={(e) => {
        if (location.includes("register")) {
          createProduct(
            e,
            session.data?.user.jwt || "",
            session.data?.user.id || "",
          );
          return;
        }
        updateProduct(e, session.data?.user.jwt || "", data.id);
      }}
    >
      <div className="py-8 px-6">
        <ProductImageSelector image={data.image} />
      </div>
      <div className="py-8 px-6 w-[428px] bg-white rounded-[10px] mr-5">
        <ProductInput data={data} />
      </div>
    </form>
  );
};

export default ProductEditor;
