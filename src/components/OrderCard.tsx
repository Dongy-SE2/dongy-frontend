import { Clock } from "lucide-react";
import { Order } from "@/app/api/order/getOrderList";
import Image from "next/image";

function OrderCard({ order }: { order: Order }) {
  const statusColors: Record<string, string> = {
    อยู่ระหว่างดำเนินการ: "bg-gray-400",
    อยู่ระหว่างจัดส่ง: "bg-yellow-400",
    ได้รับสินค้าแล้ว: "bg-green-400",
  };
  const parseDate = (dateStr: string): Date => {
    if (!dateStr) return new Date(0);

    try {
      const parts = dateStr.replace(" น.", "").split(/[\s|]/);
      if (parts.length < 4) return new Date(0);

      const [day, monthText, year, time] = parts;
      const monthMap: { [key: string]: number } = {
        มกราคม: 0,
        กุมภาพันธ์: 1,
        มีนาคม: 2,
        เมษายน: 3,
        พฤษภาคม: 4,
        มิถุนายน: 5,
        กรกฎาคม: 6,
        สิงหาคม: 7,
        กันยายน: 8,
        ตุลาคม: 9,
        พฤศจิกายน: 10,
        ธันวาคม: 11,
      };

      const [hour, minute] = time.split(".").map(Number);
      return new Date(
        Number(year) - 543,
        monthMap[monthText] || 0,
        Number(day),
        24 - hour || 0,
        minute || 0
      );
    } catch (error) {
      console.error("Invalid date format:", dateStr);
      return new Date(0);
    }
  };

  return (
    <div className="w-[240px] h-[60px] p-2 bg-gray-200 shadow rounded-xl flex items-center space-x-3">
      {/* Placeholder for Image or Product Icon */}
      <div className="relative">
        <div className="size-12 bg-gray-300 rounded-lg">
          <Image
            alt="product_image"
            src={order.product?.images[0]?.url || "/default-product.jpg"}
            width="48"
            height="48"
            className="w-12 h-12 object-cover rounded-t-xl"
          />
        </div>

        <div
          className={`size-3 rounded-full absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2 
          ${statusColors[order.state] || "bg-gray-200"}`}
        ></div>
      </div>

      {/* Order Details */}
      <div className="flex-1">
        <p className="text-sm font-medium">
          {order.product?.product_name || "ไม่ระบุชื่อ"}
        </p>
        <div className="flex items-center space-x-2">
          <Clock className="size-[14px]" />
          <span className="text-gray-800 text-[10px] font-normal">
            {order.createdAt
              ? new Date(order.createdAt).toLocaleString("th-TH")
              : "ไม่ระบุวันที่"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
