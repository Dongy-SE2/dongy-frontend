"use client";

import { useContext } from "react";
import { orderProvider } from "./OrderProvider";
import { useState } from "react";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";
import OrderInfo from "./OrderInfo";
import UpdateStatus from "./UpdateStatus";

export default function TrackingInfo() {
  const { orders, idx } = useContext(orderProvider);
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-[0.9rem] grid-flow-row-dense items-center bg-white shadow-md rounded-xl px-8 py-6 w-[35rem] h-72 text-gray-600"
      style={{ gridAutoRows: "minmax(auto, max-content)" }}
    >
      {!loading || orders[idx] ? (
        <>
          <p className="font-medium text-sm">สถานะ</p>
          <OrderInfo order={orders[idx]} />
          {orders[idx].state !== "ได้รับสินค้าแล้ว" && (
            <UpdateStatus setLoading={setLoading} order={orders[idx]} />
          )}
        </>
      ) : !loading ? (
        <p>
          {orders.length === 0 ? "ไม่พบสินค้า" : "ไม่พบข้อมูลของสินค้าในระบบ"}
        </p>
      ) : (
        <div className="flex flex-col items-center justify-center mb-3 ">
          <p className="text-black text-sm mb-2">Loading...</p>
          <Waveform size="20" speed="1" color="black" stroke="1" />
        </div>
      )}
    </div>
  );
}
