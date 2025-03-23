"use server"; // เปลี่ยนเป็น Client Component

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import getSellerOrders from "../api/order/getOrderList";
import OrderManageClient from "@/components/OrderManageCilent";

export default async function OrderManagePage() {
  const session = await auth();
  if (!session || !session.user.id) redirect("/login");

  // ดึงรายการคำสั่งซื้อ
  const order_list = await getSellerOrders(session.user.id, session.user.jwt);

  if (!order_list || order_list.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-medium">ไม่มีคำสั่งซื้อที่ต้องจัดส่ง</p>
      </div>
    );
  }

  return <OrderManageClient orders={order_list} token={session.user.jwt} />;
}
