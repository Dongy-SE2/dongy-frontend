import { Product } from "@/app/api/product/getProductList";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="px-16 pt-10 grid grid-cols-3 w-full">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
