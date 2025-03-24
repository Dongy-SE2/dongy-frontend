"use client";

import { useContext } from "react";
import { orderProvider } from "./OrderProvider";

export default function TrackingInfo() {
  const { orders, idx } = useContext(orderProvider);
  return (
    <div
      className="grid grid-cols-[auto_1fr] gap-x-5 grid-flow-row-dense bg-white shadow-md"
      style={{ gridAutoRows: "minmax(auto, max-content)" }}
    >
      {!orders[idx] ? (
        <p>ไม่พบสินค้า</p>
      ) : (
        <>
          <p>ชื่อผู้รับ</p>
          <p>{orders[idx].receiver}</p>
          <p>เบอร์โทรศัพท์</p>
          <p>{orders[idx].tel}</p>
          <p>ที่อยู่จัดส่ง</p>
          <p className="w-96">{orders[idx].location}</p>
          <p>จัดส่งโดย</p>
          <p>{orders[idx].courier}</p>
          <p>Tracking No</p>
          <p>{orders[idx].trackingId}</p>
          <p>สถานะ</p>
        </>
      )}
    </div>
  );
}
