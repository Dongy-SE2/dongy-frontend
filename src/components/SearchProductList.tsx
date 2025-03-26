import { Product } from "@/app/api/product/getProductList";
import SearchProductCard from "./SearchProductCard";

interface searchProductListProps {
  searchProducts: Product[];
  filters?: string[]; // array of selected filters
}

function SearchProductList({
  searchProducts,
  filters,
}: searchProductListProps) {
  const filteredItems = searchProducts.filter((product) => {
    if (!filters || filters.length === 0) return true;
    return filters.some((filter) => product.categories?.includes(filter));
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {filteredItems.map((product) => (
        <SearchProductCard key={product.id} searchProduct={product} />
      ))}
    </div>
  );
}

export default SearchProductList;
