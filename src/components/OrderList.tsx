import OrderCard from "./OrderCard";
import { Order } from "@/app/api/order/getOrderList";

function OrderList({
  orders,
  onSelectOrder,
}: {
  orders: any[];
  onSelectOrder: (orderId: string) => void;
}) {
  if (!Array.isArray(orders)) {
    console.error("Invalid orders data:", orders);
    return <p className="text-center text-gray-500">ไม่พบข้อมูลคำสั่งซื้อ</p>;
  }

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

  const statusPriority: { [key: string]: number } = {
    รอการจัดส่ง: 1,
    อยู่ระหว่างจัดส่ง: 2,
    จัดส่งสำเร็จ: 3,
  };

  const sortedOrders = [...orders].sort((a, b) => {
    const statusA = statusPriority[a.state] || 99;
    const statusB = statusPriority[b.state] || 99;

    if (statusA !== statusB) return statusA - statusB; // ✅ Sort by status priority

    const dateA = parseDate(a.createdAt);
    const dateB = parseDate(b.createdAt);

    if (dateA.toDateString() !== dateB.toDateString()) {
      return dateB.getTime() - dateA.getTime(); // ✅ Sort by newest date first
    }

    // ✅ If the dates are the same, sort by closest time to now
    const now = new Date().getTime();
    const diffA = Math.abs(dateA.getTime() - now);
    const diffB = Math.abs(dateB.getTime() - now);

    return diffA - diffB; // ✅ Order closest to current time first
  });

  return (
    <div className="space-y-3 h-96 w-[272px] shadow-md overflow-y-auto bg-white p-4 rounded-[10px] scrollbar-none">
      {sortedOrders.length > 0 ? (
        sortedOrders.map((order, index) => (
          <div
            key={order.id}
            onClick={() => onSelectOrder(order.id)}
            className="cursor-pointer"
          >
            <OrderCard order={order} />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">ไม่มีคำสั่งซื้อ</p>
      )}
    </div>
  );
}

export default OrderList;
