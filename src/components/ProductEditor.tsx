"use client";
import { ProductInfo } from "@/app/api/product/getProductInfo";
import ProductImageSelector from "./ProductImageSelector";
import ProductInput from "./ProductInput";
import updateProduct from "@/app/api/product/updateProduct";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import createProduct from "@/app/api/product/createProduct";
import { createContext, useState } from "react";

interface Props {
  data: ProductInfo;
}

interface Context {
  uploadImage: File[];
  changeUploadImage: React.Dispatch<React.SetStateAction<File[]>>;
}

const uploadImageContext = createContext<Context | null>(null);
const ProductEditor: React.FC<Props> = ({ data }) => {
  const session = useSession();
  const location = usePathname();
  const router = useRouter();
  const [uploadImage, changeUploadImage] = useState<File[]>([]);
  return (
    <form
      className="flex justify-between pt-5"
      action={async (e) => {
        if (location.includes("register")) {
          const res = await createProduct(
            e,
            session.data?.user.jwt || "",
            session.data?.user.username || "",
            uploadImage,
          );
          if (res === 201) {
            alert("Success!");
            router.replace("/user/");
          }
        } else {
          const res = await updateProduct(
            e,
            session.data?.user.jwt || "",
            data.id,
            uploadImage,
          );
          if (res === 201) {
            alert("Success!");
            router.refresh();
          }
        }
      }}
    >
      <div className="py-8 px-6">
        <uploadImageContext.Provider value={{ uploadImage, changeUploadImage }}>
          <ProductImageSelector image={data.image} />
        </uploadImageContext.Provider>
      </div>
      <div className="py-8 px-6 w-[428px] bg-white rounded-[10px] mr-5">
        <ProductInput data={data} />
      </div>
    </form>
  );
};

export default ProductEditor;

export { uploadImageContext };
