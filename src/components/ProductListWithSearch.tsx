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
      <form className="pt-4 mt-8" onSubmit={handleSearch}>
      
      <div className="flex justify-center">
  <div className="flex flex-row items-center">
    <input
      type="text"
      value={searchText}
      className="text-md px-4 w-[780px] h-[50px] border-gray-200 border rounded-lg"
      placeholder="ค้นหาสินค้า"
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button type="submit">
      <img
        src="/image/searchIcon.png"
        alt="search icon"
        className="ml-4 w-10 h-10 rounded-full border border-gray-200"
      />
    </button>
  </div>
</div>

        <div className="mt-6 ">

        <div className="flex flex-row items-center justify-center gap-3">
        <Button
    className={`text-md w-fit h-10 border ${
      filters.includes("เสื้อผ้า") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-100 shadow-md"
    }`}
    onClick={(e) => handleFilter(e, "เสื้อผ้า")}
  >
    เสื้อผ้า
  </Button>
  <Button
    className={`text-md w-fit h-10 border ${
      filters.includes("เครื่องเรือน") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-100 shadow-md"
    }`}
    onClick={(e) => handleFilter(e, "เครื่องเรือน")}
  >
    เครื่องเรือน
  </Button>
  <Button
    className={`text-md w-fit h-10 border ${
      filters.includes("อิเล็กทรอนิกส์") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-100 shadow-md"
    }`}
    onClick={(e) => handleFilter(e, "อิเล็กทรอนิกส์")}
  >
    อิเล็กทรอนิกส์
  </Button>

  <Button
    className={` text-md  w-fit h-10 border ${
      filters.includes("ของสะสม") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-100 shadow-md"
    }`}
    onClick={(e) => handleFilter(e, "ของสะสม")}
  >
    ของสะสม
  </Button>
  <Button
    className={`text-md  w-fit h-10 border ${
      filters.includes("หนังสือ") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-100 shadow-md"
    }`}
    onClick={(e) => handleFilter(e, "หนังสือ")}
  >
    หนังสือ
  </Button>
  <Button
    className={`text-md  w-fit h-10 border ${
      filters.includes("อื่นๆ") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-100 shadow-md"
    }`}
    onClick={(e) => handleFilter(e, "อื่นๆ")}
  >
    อื่น ๆ
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
      {error && (
        <div className="text-red-500 text-center mt-4">{error}</div>
      )}

      {loading ? (
        <div className="text-center mt-6">
          <span className="spinner primary" />
          <p className="animate-pulse">Loading...</p>
        </div>
      ) : (
        <SearchProductList searchProducts={searchProducts} filters={filters} />
      )}
    </>
  );
};

export default ProductListWithSearch;
