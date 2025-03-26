function StatusBadge({ status }: { status: string }) {
  const BGcolors: Record<string, string> = {
    อยู่ระหว่างดำเนินการ: "bg-gray-100",
    อยู่ระหว่างจัดส่ง: "bg-yellow-100",
    ได้รับสินค้าแล้ว: "bg-green-100",
  };
  const Textcolors: Record<string, string> = {
    อยู่ระหว่างดำเนินการ: "text-gray-600",
    อยู่ระหว่างจัดส่ง: "text-yellow-600",
    ได้รับสินค้าแล้ว: "text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-xl ${BGcolors[status] || "bg-gray-200"} ${Textcolors[status] || "text-gray-600"}`}
    >
      {status}
    </span>
  );
}
export default StatusBadge;
