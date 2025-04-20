"use server";

import { auth } from "@/auth";
import ProductManageHeader from "@/components/ProductManageHeader";
import { redirect } from "next/navigation";
import getBuyerOrder from "../api/order/getBuyerOrderList";
import OrderProvider from "@/components/tracking/OrderProvider";
import TrackingInfo from "@/components/tracking/TrackingInfo";
import TrackingList from "@/components/tracking/TrackingList";
import { SessionProvider } from "next-auth/react";

export default async function TrackingPage() {
  const session = await auth();
  if (!session || !session.user) redirect("/login");
  const orders = (await getBuyerOrder(session.user.jwt)).filter(
    (order) => order.state !== "รอดำเนินการ",
  );
  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
      <div className="flex flex-col">
        <ProductManageHeader name="สินค้ารอจัดส่ง" href="/user/" />
        <OrderProvider value={orders}>
          <div className="flex flex-row justify-evenly mt-8">
            <div>
              <h2 className="text-xl font-medium mb-3">รายการสินค้า</h2>
              <TrackingList />
            </div>
            <SessionProvider>
              <div>
                <h2 className="text-xl font-medium mb-3">สถานะการจัดส่ง</h2>
                <TrackingInfo />
              </div>
            </SessionProvider>
          </div>
        </OrderProvider>
      </div>
    </div>
  );
}
