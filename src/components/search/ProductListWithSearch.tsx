"use client";

import { createContext, useState } from "react";
import SearchProductList from "./SearchProductList";
import { Product } from "@/app/api/product/getProductList";
import { searchProduct } from "@/app/api/product/searchProduct";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

interface FilterContext {
  filters: string[];
  setFilters?: React.Dispatch<React.SetStateAction<string[]>>;
}

const filterContext = createContext<FilterContext>({ filters: [] });

const ProductListWithSearch: React.FC<{ product_list: Product[] }> = ({
  product_list,
}: {
  product_list: Product[];
}) => {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <>
      <form className="pt-4 mt-8" action={searchProduct}>
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <filterContext.Provider value={{ filters, setFilters }}>
          <div className="mt-6">
            <FilterBar />
          </div>

          <SearchProductList searchProducts={product_list} />
        </filterContext.Provider>
      </form>
    </>
  );
};

export { filterContext };

export default ProductListWithSearch;
