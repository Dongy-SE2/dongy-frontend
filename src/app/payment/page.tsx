import ProductManageHeader from "@/components/ProductManageHeader";
import getProductList, { Product } from "../api/product/getProductList";
import Total from "@/components/Total";
import PaymentList from "@/components/PaymentList";
import PaymentContext from "@/components/PaymentContext";

export default async function Payment() {
  const products: Array<Product> = await getProductList("123");
  return (
    <PaymentContext>
      <ProductManageHeader href="/" name="ชำระเงิน" />
      <div className="flex flex-row justify-evenly mt-7">
        <PaymentList products={products} />
        <Total products={products} />
      </div>
    </PaymentContext>
  );
}
