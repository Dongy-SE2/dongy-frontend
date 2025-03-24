function StatusBadge({ status }: { status: string }) {
  const BGcolors: Record<string, string> = {
    อยู่ระหว่างจัดส่ง: "bg-yellow-100",
    รอการจัดส่ง: "bg-gray-100",
    จัดส่งสำเร็จ: "bg-green-100",
  };
  const Textcolors: Record<string, string> = {
    อยู่ระหว่างจัดส่ง: "text-yellow-600",
    รอการจัดส่ง: "text-gray-600",
    จัดส่งสำเร็จ: "text-green-700",
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
