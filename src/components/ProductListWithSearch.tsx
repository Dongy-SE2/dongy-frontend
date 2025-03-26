"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { searchProduct } from "@/app/api/searchProduct/searchProduct";
import { searchProductAPI } from "@/app/api/searchProduct/searchProductAPI";
import SearchProductList from "./SearchProductList";

const ProductListWithSearch: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchProducts, setSearchProducts] = useState<searchProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    async function loadSearchProducts() {
      setLoading(true);
      try {
        const data = await searchProductAPI.get(searchText);
        setSearchProducts(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadSearchProducts();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchProductAPI.get(searchText);
      setSearchProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
      <form className="pt-4 mt-8" onSubmit={handleSearch}>
      
      <div className="flex justify-center">
  <div className="flex flex-row items-center">
    <input
      type="text"
      value={searchText}
      className="text-xl px-4 w-[780px] h-[50px] border-gray-400 border shadow-sm rounded-lg"
      placeholder="ค้นหาสินค้า"
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button type="submit">
      <img
        src="/image/searchIcon.png"
        alt="search icon"
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
      filters.includes("เสื้อผ้า") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-500"
    }`}
    onClick={(e) => handleFilter(e, "เสื้อผ้า")}
  >
    เสื้อผ้า
  </Button>
  <Button
    className={`text-2xl mt-4 w-[180px] h-[45px] mb-5 border ${
      filters.includes("เครื่องเรือน") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-500"
    }`}
    onClick={(e) => handleFilter(e, "เครื่องเรือน")}
  >
    เครื่องเรือน
  </Button>
  <Button
    className={`text-2xl mt-4 w-[180px] h-[45px] mb-5 border ${
      filters.includes("อิเล็กทรอนิกส์") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-500"
    }`}
    onClick={(e) => handleFilter(e, "อิเล็กทรอนิกส์")}
  >
    อิเล็กทรอนิกส์
  </Button>
</div>

<div className="flex gap-x-16 justify-center">
  <Button
    className={` text-2xl  w-[180px] h-[45px] mb-5 border ${
      filters.includes("ของสะสม") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-500"
    }`}
    onClick={(e) => handleFilter(e, "ของสะสม")}
  >
    ของสะสม
  </Button>
  <Button
    className={`text-2xl  w-[180px] h-[45px]] mb-5 border ${
      filters.includes("หนังสือ") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-500"
    }`}
    onClick={(e) => handleFilter(e, "หนังสือ")}
  >
    หนังสือ
  </Button>
  <Button
    className={`text-2xl  w-[180px] h-[45px] mb-5 border ${
      filters.includes("อื่นๆ") ? "bg-gray-700 text-white" : "bg-white text-gray-800 border-gray-500"
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
          <p>Loading...</p>
        </div>
      ) : (
        <SearchProductList searchProducts={searchProducts} filters={filters} />
      )}
    </>
  );
};

export default ProductListWithSearch;
