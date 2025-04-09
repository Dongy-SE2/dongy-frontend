"use client";

import { useState } from "react";
import SearchProductList from "./SearchProductList";
import Image from "next/image";
import { Product } from "@/app/api/product/getProductList";
import { searchProduct } from "@/app/api/product/searchProduct";

const ProductListWithSearch: React.FC<{ product_list: Product[] }> = ({
  product_list,
}: {
  product_list: Product[];
}) => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilter = (e: React.MouseEvent, filter: string) => {
    e.preventDefault();
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <>
      <form className="pt-4 mt-8" action={searchProduct}>
        <div className="flex justify-center">
          <div className="flex flex-row items-center">
            <input
              name="search"
              type="text"
              className="text-md px-4 w-[780px] h-[50px] border-gray-200 border rounded-lg"
              placeholder="ค้นหาสินค้า"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg transition-all"
            >
              <Image
                height={200}
                width={200}
                src="/image/searchIcon.png"
                alt="search icon"
                className="ml-4 w-10 h-10 rounded-full border border-gray-200"
              />
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-row items-center justify-center gap-3">
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
                filters.includes("เสื้อผ้า")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-100 shadow-md"
              }`}
              onClick={(e) => handleFilter(e, "เสื้อผ้า")}
            >
              เสื้อผ้า
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
                filters.includes("เครื่องเรือน")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-100 shadow-md"
              }`}
              onClick={(e) => handleFilter(e, "เครื่องเรือน")}
            >
              เครื่องเรือน
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
                filters.includes("อิเล็กทรอนิกส์")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-100 shadow-md"
              }`}
              onClick={(e) => handleFilter(e, "อิเล็กทรอนิกส์")}
            >
              อิเล็กทรอนิกส์
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
                filters.includes("ของสะสม")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-100 shadow-md"
              }`}
              onClick={(e) => handleFilter(e, "ของสะสม")}
            >
              ของสะสม
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
                filters.includes("หนังสือ")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-100 shadow-md"
              }`}
              onClick={(e) => handleFilter(e, "หนังสือ")}
            >
              หนังสือ
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
                filters.includes("อื่นๆ")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-100 shadow-md"
              }`}
              onClick={(e) => handleFilter(e, "อื่นๆ")}
            >
              อื่น ๆ
            </button>
          </div>
        </div>
        <SearchProductList searchProducts={product_list} filters={filters} />
      </form>
      
    </>
  );
};

export default ProductListWithSearch;
