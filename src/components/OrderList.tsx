import OrderCard from "./OrderCard";

function OrderList() {
  const orders = [
    {
      name: "รองเท้า",
      date: "18 มีนาคม 2568 | 13.38 น.",
      status: "อยู่ระหว่างจัดส่ง",
    },
    {
      name: "รองเท้า",
      date: "18 มีนาคม 2568 | 14.38 น.",
      status: "อยู่ระหว่างจัดส่ง",
    },
    {
      name: "รองเท้า",
      date: "17 มีนาคม 2568 | 13.38 น.",
      status: "รอการจัดส่ง",
    },
    {
      name: "รองเท้า",
      date: "17 มีนาคม 2568 | 14.38 น.",
      status: "จัดส่งสำเร็จ",
    },
    {
      name: "รองเท้า",
      date: "19 มีนาคม 2568 | 15.38 น.",
      status: "อยู่ระหว่างจัดส่ง",
    },
  ];

  // ฟังก์ชันแปลงวันที่ให้อยู่ในรูปแบบที่เปรียบเทียบได้
  const parseDate = (dateStr: string) => {
    const [day, monthText, year, time] = dateStr
      .replace(" น.", "")
      .split(/[\s|]/);
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
      monthMap[monthText],
      Number(day),
      hour,
      minute
    );
  };

  // กำหนดลำดับความสำคัญของสถานะ
  const statusPriority: { [key: string]: number } = {
    รอการจัดส่ง: 1,
    อยู่ระหว่างจัดส่ง: 2,
    จัดส่งสำเร็จ: 3,
  };

  // เรียงลำดับ orders ตามสถานะก่อน แล้วตามวันเวลาสั่งซื้อ
  const sortedOrders = [...orders].sort((a, b) => {
    const statusA = statusPriority[a.status];
    const statusB = statusPriority[b.status];

    if (statusA !== statusB) return statusA - statusB; // เรียงตามสถานะ
    return parseDate(a.date).getTime() - parseDate(b.date).getTime(); // ถ้าสถานะเท่ากัน ให้เรียงตามเวลา
  });

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto bg-white p-4 rounded-[10px] scrollbar-none">
      {sortedOrders.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </div>
  );
}

export default OrderList;
