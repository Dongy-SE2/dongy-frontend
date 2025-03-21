import { Clock } from "lucide-react";

function OrderCard({
  name,
  date,
  status,
}: {
  name: string;
  date: string;
  status: string;
}) {
  const statusColors: Record<string, string> = {
    อยู่ระหว่างจัดส่ง: "bg-yellow-400",
    รอการจัดส่ง: "bg-gray-400",
    จัดส่งสำเร็จ: "bg-green-400",
  };
  return (
    <div className="w-[240px] h-[60px] p-2 bg-gray-200 shadow rounded-xl flex items-center space-x-3">
      <div className="relative">
        <div className="size-12 bg-gray-300 rounded-lg"></div>
        <div
          className={`size-3 rounded-full absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2 ${statusColors[status] || "bg-gray-200"} `}
        ></div>
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <div className="flex items-center space-x-2 ">
          <Clock className="size-[14px]" />
          <span className="text-gray-800 text-[10px] font-normal">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
