"use client";
import deleteProduct from "@/app/api/product/deleteProduct";
import { Pen, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  image: string;
  minPrice: number;
  subId: string;
  id: string;
}

const ProductCard: React.FC<Props> = ({ name, image, id, subId, minPrice }) => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="relative w-60 h-44 rounded-xl bg-white shadow-sm mt-5">
      <Image
        alt="product_image"
        src={image}
        width="400"
        height="400"
        className="w-full h-32 object-cover rounded-t-xl"
      />
      <div className="py-2 px-4 inline-flex items-center justify-between w-full">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-400 text-sm item-center text-right content-center">
          {minPrice} ฿
        </p>
      </div>
      <div className="inline-flex absolute right-1 top-0">
        <button
          className="p-1.5 bg-white rounded-full mr-1 mt-2"
          onClick={async (e) => {
            e.preventDefault();
            const res = await deleteProduct(id, session?.user.jwt || "");
            if (res === 204) {
              alert("Success!");
              router.refresh();
            }
          }}
        >
          <Trash2 width="16" height="16" />
        </button>
        <Link
          href={`/product/manage/${subId}`}
          className="p-1.5 bg-white rounded-full mr-1 mt-2"
        >
          <Pen width="16" height="16" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
