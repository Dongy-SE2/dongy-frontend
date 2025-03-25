import ProductItem from "./ProductItem";
import { Order } from "@/app/api/order/getBuyerOrderList";

const PaymentList: React.FC<{
  products: Array<Order>;
}> = ({ products }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-medium mb-2">รายการสินค้าที่ประมูลได้</h2>
      <div className="w-64 h-[33.675rem] bg-white shadow-md rounded-xl px-4 py-1 overflow-y-scroll">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default PaymentList;
