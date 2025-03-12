import { Product } from "@/app/api/product/getProductList";
import ProductCardNoEdit from "./ProductCardNoEdit";

interface Props {
  products: Product[];
}

const SearchBar: React.FC = () => {
  // TODO: Get categories from server

  return (
    <form className="pt-4">
      <h2 className="text-lg mb-1">ค้นหาสินค้า</h2>
      <div className="flex flex-row">
        <input
          type="text"
          className="w-full border-gray-400 border-1 shadow-sm rounded-md h-8"
        />
        <input
          type="submit"
          value="ค้นหา"
          className="px-3 py-1 bg-white shadow-sm border-1 border-gray-400 rounded-lg ml-5"
        />
      </div>
    </form>
  );
};

const ProductListWithSearch: React.FC<Props> = ({ products }) => {
  return (
    <>
      <SearchBar />
      <div className="px-16 pt-6 grid grid-cols-3 w-full">
        {products.map((product) => (
          <ProductCardNoEdit {...product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductListWithSearch;
