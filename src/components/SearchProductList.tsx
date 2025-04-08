import { Product } from "@/app/api/product/getProductList";
import SearchProductCard from "./SearchProductCard";
import { useFormStatus } from "react-dom";
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'

interface searchProductListProps {
  searchProducts: Product[];
  filters?: string[]; // array of selected filters
}

function SearchProductList({
  searchProducts,
  filters,
}: searchProductListProps) {
  const {pending} = useFormStatus();
  const filteredItems = searchProducts.filter((product) => {
    if (!filters || filters.length === 0) return true;
    return filters.some((filter) => product.categories?.includes(filter));
  });

  return (
    <>
    { !pending && (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {filteredItems.map((product) => (
        <SearchProductCard key={product.id} searchProduct={product} />
      ))}
    </div>)}

    {pending && (<div className='mt-40 flex justify-center'>
                <Hourglass size="60" color="#047857"
                speed="1.75" bg-opacity="0.1"/>
            </div>)}

    </>
    
  );
}

export default SearchProductList;
