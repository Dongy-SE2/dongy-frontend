"use client";

import { Product } from "@/app/api/product/getProductList";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Selection } from "./PaymentContext";

const ProductItem: React.FC<{
  product: Product;
}> = ({ product }) => {
  const [isSelect, changeSelect] = useState(false);
  const { selection, setSelect } = useContext(Selection);
  useEffect(() => {
    if (!setSelect) return;
    if (!isSelect) {
      const filter = selection.filter((value) => value !== product.id);
      if (filter.length !== selection.length) setSelect(filter);
    } else {
      const filter = selection.filter((value) => value === product.id);
      if (filter.length === 0) setSelect([...selection, product.id]);
    }
  }, [product, isSelect, selection, setSelect]);
  return (
    <button
      className={`flex flex-row justify-between ${!isSelect ? "bg-gray-200" : "bg-gray-600"} px-2 py-2 text-sm rounded-xl my-3 text-left w-full`}
      onClick={() => changeSelect(!isSelect)}
    >
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={0}
          height={0}
          className="w-16 h-16 inline-block object-cover rounded-xl mr-4"
        />
        <div className="inline-flex flex-col h-full align-middle justify-center">
          <p className={!isSelect ? "text-gray-800" : "text-white"}>
            {product.name}
          </p>
          <p className={!isSelect ? "text-gray-500" : "text-white"}>
            {product.maxPrice}
          </p>
        </div>
      </div>
      <div>
        <ShoppingBag
          className={`inline-flex flex-col h-full align-middle justify-center ${!isSelect ? "text-gray-500" : "text-white"}`}
        />
      </div>
    </button>
  );
};

export default ProductItem;
