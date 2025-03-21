"use client";

import MovebackButton from "@/components/MovebackButton";
import OrderList from "@/components/OrderList";
import OrderDetails from "@/components/OrderDetail";
import ShippingDetails from "@/components/OrderShippingDetail";

export default function OrderManagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] flex justify-center p-6">
      <div className="w-[832px] items-center justify-center">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-medium">สินค้ารอจัดส่ง</h1>
          <MovebackButton href={"/"} />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* รายการสินค้า */}
          <div className="space-y-3">
            <h2 className="text-xl font-medium">สินค้าที่ต้องจัดส่ง</h2>
            <OrderList />
          </div>

          {/* รายละเอียดการสั่งซื้อและจัดส่ง */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-xl font-medium">รายละเอียดการสั่งซื้อ</h2>
            <OrderDetails
              user="วสุพล ดิสสานนท์"
              price="1,200"
              method="Promptpay"
              date="17 มีนาคม 2568 | 13.38 น."
              product="รองเท้า"
            />

            <h2 className="text-xl font-medium">รายละเอียดการจัดส่ง</h2>
            <ShippingDetails status="อยู่ระหว่างจัดส่ง" />

            <div className="mt-3 flex gap-2">
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => {}}
              >
                รายงานปัญหา
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => {}}
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
