"use client";

import { useState, useEffect } from "react";
import OrderList from "@/components/OrderList";
import OrderDetails from "@/components/OrderDetail";
import ShippingDetails from "@/components/OrderShippingDetail";
import updateOrder from "@/app/api/order/updateOrder"; // ✅ Import update function
import MovebackButton from "./MovebackButton";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";
import { useRouter } from "next/navigation";

export default function OrderManageClient({
  orders,
  token,
}: {
  orders: any[];
  token: string;
}) {
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);
  const [carrier, setCarrier] = useState(selectedOrder.courier || "ไม่ระบุ");
  const [tracking, setTracking] = useState(
    selectedOrder.tracking_no || "ไม่ระบุ",
  );

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCarrier(selectedOrder.courier || "ไม่ระบุ");
    setTracking(selectedOrder.tracking_no || "ไม่ระบุ");
  }, [selectedOrder]);

  const handleSelectOrder = (orderId: string) => {
    const newOrder = orders.find((order) => order.id === orderId);
    if (newOrder) setSelectedOrder(newOrder);
  };

  const handleSave = async () => {
    setLoading(true);
    if (selectedOrder.state === "อยู่ระหว่างดำเนินการ") {
      try {
        await updateOrder(selectedOrder.documentId, token, carrier, tracking);
        alert("อัปเดตข้อมูลการจัดส่งเรียบร้อย!");
      } catch (e) {
        console.log(e);
        alert("เกิดข้อผิดพลาดในการอัปเดต กรุณาลองอีกครั้ง");
      }
    } else {
      alert("สถานะนี้ไม่สามารถอัปเดตได้");
    }
    setLoading(false);
  };
  // console.log(selectedOrder);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] flex justify-center p-6">
      <div className="w-[832px] items-center justify-center">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-medium">สินค้ารอจัดส่ง</h1>
          <MovebackButton href="/user" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3">
            <h2 className="text-xl font-medium">สินค้าที่ต้องจัดส่ง</h2>
            <OrderList orders={orders} onSelectOrder={handleSelectOrder} />
          </div>

          <div className="col-span-2 space-y-4">
            <h2 className="text-xl font-medium">รายละเอียดการสั่งซื้อ</h2>
            <OrderDetails
              user={selectedOrder.buyer?.username || "ไม่ระบุ"}
              price={selectedOrder.total_amount || "ไม่ระบุ"}
              date={selectedOrder.payment?.paymentDate || "ไม่ระบุ"}
              product={selectedOrder.product?.product_name || "ไม่ระบุ"}
              product_id={selectedOrder.product?.id || "ไม่ระบุ"}
            />

            <h2 className="text-xl font-medium">รายละเอียดการจัดส่ง</h2>
            <ShippingDetails
              carrier={carrier}
              tracking={tracking}
              status={selectedOrder.state || "รอการจัดส่ง"}
              onCarrierChange={setCarrier}
              onTrackingChange={setTracking}
            />

            {loading && (
              <div className="flex flex-col items-center justify-center mb-3 ">
                <p className="text-black text-sm mb-2">Loading...</p>
                <Waveform size="20" speed="1" color="black" stroke="1" />
              </div>
            )}

            {!loading && (
              <div className="mt-3 flex gap-2">
                <button
                  className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() =>
                    router.replace(
                      `/report?type=order&id=${selectedOrder.documentId}`,
                    )
                  }
                >
                  รายงานปัญหา
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={handleSave}
                >
                  บันทึก
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
