"use server"; // เปลี่ยนเป็น Client Component

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import getSellerOrders from "../api/order/getOrderList";
import OrderManageClient from "@/components/OrderManageCilent";
import MovebackButton from "@/components/MovebackButton";

export default async function OrderManagePage() {
  const session = await auth();
  if (!session || !session.user.id) redirect("/login");

  // ดึงรายการคำสั่งซื้อ
  const order_list = await getSellerOrders(session.user.id, session.user.jwt);

  if (!order_list || order_list.length === 0) {
    return (
      

      <div className="mx-auto flex flex-col items-center min-h-screen bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
          <div className="w-[923px] flex items-center justify-between">
            <h1 className="text-2xl font-semibold item-center content-center">
              สินค้ารอจัดส่ง
            </h1>
            <MovebackButton href={"/user"}></MovebackButton>
          </div>
          <p className="text-xl mt-20 font-medium">ไม่มีคำสั่งซื้อที่ต้องจัดส่ง</p>

      </div>

    );
  }

  return <OrderManageClient orders={order_list} token={session.user.jwt} />;
}
