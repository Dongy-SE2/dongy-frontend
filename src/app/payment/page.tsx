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
  const products: Array<Order> = (await getBuyerOrder(session.user.jwt)).filter(
    (val) => val.state === "รอดำเนินการ",
  );
  return (
    <PaymentContext>
        <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
            <div className="flex flex-col">
                <ProductManageHeader href="/user" name="ชำระเงิน" />
              <div className="flex flex-row justify-evenly mt-7 gap-10">
                <PaymentList products={products} />
                <SessionProvider>
                  <Total />
                </SessionProvider>
          </div>


            </div>
            
        </div>
    </PaymentContext>
  );
}
