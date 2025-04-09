import { Product } from "@/app/api/product/getProductList";
import SearchProductCard from "./SearchProductCard";
import { useFormStatus } from "react-dom";
import { Hourglass } from "ldrs/react";
import "ldrs/react/Hourglass.css";
import { useContext } from "react";
import { filterContext } from "./ProductListWithSearch";

const Loading: React.FC = () => {
  return (
    <div className="mt-40 flex justify-center">
      <Hourglass size="60" color="#047857" speed="1.75" bg-opacity="0.1" />
    </div>
  );
};

const FilterItems: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <SearchProductCard key={product.id} searchProduct={product} />
      ))}
    </div>
  );
};

interface searchProductListProps {
  searchProducts: Product[];
}

function SearchProductList({ searchProducts }: searchProductListProps) {
  const { pending } = useFormStatus();
  const { filters } = useContext(filterContext);
  const filteredItems = searchProducts.filter((product) => {
    if (!filters || filters.length === 0) return true;
    return filters.some((filter) => product.categories?.includes(filter));
  });

  return (
    <>{pending ? <Loading /> : <FilterItems products={filteredItems} />}</>
  );
}

export default SearchProductList;
