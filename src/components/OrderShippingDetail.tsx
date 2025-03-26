"use client";

import { useState } from "react";
import StatusBadge from "./OrderStatusBadge";

function ShippingDetails({
  carrier,
  tracking,
  status,
  onCarrierChange,
  onTrackingChange,
}: {
  carrier: string;
  tracking: string;
  status: string;
  onCarrierChange: (newCarrier: string) => void;
  onTrackingChange: (newTracking: string) => void;
}) {
  const isEditable = status === "อยู่ระหว่างดำเนินการ";

  return (
    <div className="w-[410px] h-[150px] p-4 border rounded-xl bg-white shadow space-y-2 grid grid-cols-3 grid-rows-3 align-top text-left">
      <label className="flex align-top text-left font-medium text-sm">
        สถานะ
      </label>
      <div className="col-span-2">
        <StatusBadge status={status} />
      </div>

      <label className="flex align-top text-left font-medium text-sm">
        ผู้จัดส่ง<p className="text-red-500 text-sm">*</p>
      </label>
      <select
        value={carrier}
        onChange={(e) => onCarrierChange(e.target.value)}
        disabled={!isEditable}
        className={`w-[216px] h-[30px] border rounded-xl col-span-2 text-xs font-normal pl-2 ${
          isEditable
            ? "bg-gray-100"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        <option value="Kerry Express">Kerry Express</option>
        <option value="ไปรษณีย์ไทย">ไปรษณีย์ไทย</option>
      </select>

      <label className="flex align-top text-left font-medium text-sm">
        Tracking Number<p className="text-red-500">*</p>
      </label>
      <input
        type="text"
        value={tracking}
        onChange={(e) => onTrackingChange(e.target.value)}
        disabled={!isEditable}
        className={`w-[216px] h-[30px] border rounded-md col-span-2 text-xs font-normal pl-2 ${
          isEditable
            ? "bg-white"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      />
    </div>
  );
}

export default ShippingDetails;
