"use client";

import { useState } from "react";
import { Button } from "./ui/button";
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
        : [...prevFilters, filter],
    );
  };

  return (
    <>
      <form className="pt-4 mt-8" action={searchProduct}>
        <div className="flex justify-center">
          <div className="flex flex-row items-center">
            <input
              type="text"
              name="search"
              className="text-xl px-4 w-[780px] h-[50px] border-gray-400 border shadow-sm rounded-lg"
              placeholder="ค้นหาสินค้า"
            />
            <button type="submit">
              <Image
                src="/image/searchIcon.png"
                alt="search icon"
                width={200}
                height={200}
                className="ml-4 w-12 h-12 rounded-full border border-black"
              />
            </button>
          </div>
        </div>

        <div className="mt-6 ">
          <h2 className="text-2xl ">ตัวกรอง</h2>
          <div className="flex gap-x-16 justify-center">
            <Button
              className={`text-2xl mt-4 w-[180px] h-[45px] mb-5 border ${
                filters.includes("เสื้อผ้า")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-500"
              }`}
              onClick={(e) => handleFilter(e, "เสื้อผ้า")}
            >
              เสื้อผ้า
            </Button>
            <Button
              className={`text-2xl mt-4 w-[180px] h-[45px] mb-5 border ${
                filters.includes("เครื่องเรือน")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-500"
              }`}
              onClick={(e) => handleFilter(e, "เครื่องเรือน")}
            >
              เครื่องเรือน
            </Button>
            <Button
              className={`text-2xl mt-4 w-[180px] h-[45px] mb-5 border ${
                filters.includes("อิเล็กทรอนิกส์")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-500"
              }`}
              onClick={(e) => handleFilter(e, "อิเล็กทรอนิกส์")}
            >
              อิเล็กทรอนิกส์
            </Button>
          </div>

          <div className="flex gap-x-16 justify-center">
            <Button
              className={` text-2xl  w-[180px] h-[45px] mb-5 border ${
                filters.includes("ของสะสม")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-500"
              }`}
              onClick={(e) => handleFilter(e, "ของสะสม")}
            >
              ของสะสม
            </Button>
            <Button
              className={`text-2xl  w-[180px] h-[45px]] mb-5 border ${
                filters.includes("หนังสือ")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-500"
              }`}
              onClick={(e) => handleFilter(e, "หนังสือ")}
            >
              หนังสือ
            </Button>
            <Button
              className={`text-2xl  w-[180px] h-[45px] mb-5 border ${
                filters.includes("อื่นๆ")
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 border-gray-500"
              }`}
              onClick={(e) => handleFilter(e, "อื่นๆ")}
            >
              อื่นๆ
            </Button>
          </div>
        </div>
      </form>

      <SearchProductList searchProducts={product_list} filters={filters} />
    </>
  );
};

export default ProductListWithSearch;
