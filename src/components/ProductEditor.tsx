import { ProductInfo } from "@/app/api/product/getProductInfo";
import ProductImageSelector from "./ProductImageSelector";
import ProductInput from "./ProductInput";

interface Props {
  data: ProductInfo;
}
const ProductEditor: React.FC<Props> = ({ data }) => {
  return (
    <form className="flex justify-between pt-5">
      <div className="py-8 px-6">
        <ProductImageSelector image={data.image} />
      </div>
      <div className="py-8 px-6 w-[428px] bg-white rounded-[10px] mr-5">
        <ProductInput data={data} />
      </div>
    </form>
  );
};

export default ProductEditor;
