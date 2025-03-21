import { useState } from "react";
import OrderDetails from "./OrderDetail";
import StatusBadge from "./OrderStatusBadge";

function ShippingDetails({ status }: { status: string }) {
  const [carrier, setCarrier] = useState("Kerry Express");
  const [tracking, setTracking] = useState("SN696942053");

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
        onChange={(e) => setCarrier(e.target.value)}
        className="w=[216px] h-[30px] border rounded-xl bg-gray-100 col-span-2 text-xs font-normal pl-2"
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
        onChange={(e) => setTracking(e.target.value)}
        className="w=[216px] h-[30px] border rounded-md col-span-2 text-xs font-normal  pl-2"
      />
    </div>
  );
}
export default ShippingDetails;
