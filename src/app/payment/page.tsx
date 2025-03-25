import ProductManageHeader from "@/components/ProductManageHeader";
import Total from "@/components/Total";
import PaymentList from "@/components/PaymentList";
import PaymentContext from "@/components/PaymentContext";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import getBuyerOrder, { Order } from "../api/order/getBuyerOrderList";
import { SessionProvider } from "next-auth/react";

export default async function Payment() {
  const session = await auth();
  if (!session || !session.user) redirect("/login");
  const products: Array<Order> = (await getBuyerOrder(session.user.jwt)).filter((val) => val.state === "รอดำเนินการ");
  return (
    <PaymentContext>
      <ProductManageHeader href="/" name="ชำระเงิน" />
      <div className="flex flex-row justify-evenly mt-7">
        <PaymentList products={products} />
        <SessionProvider>
          <Total/>
        </SessionProvider>
      </div>
    </PaymentContext>
  );
}
