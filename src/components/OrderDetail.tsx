import Link from "next/link";

function OrderDetails({ user, price, date, product, product_id }: any) {
  function formatThaiDate(isoString: string): string {
    if (isoString === "ไม่ระบุ") return "ไม่ระบุวันที่";
    const date = new Date(isoString);

    const day = date.getDate();
    const monthIndex = date.getMonth(); // 0-based index (Jan = 0)
    const yearBE = date.getFullYear() + 543; // Convert to Buddhist Era
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two digits

    // Map month index to Thai month name
    const thaiMonths = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const monthThai = thaiMonths[monthIndex];

    return `${day} ${monthThai} ${yearBE} ${hours}.${minutes} น.`;
  }

  return (
    <div className="w-[410px] min-h-[180px] p-4 border rounded-lg bg-white shadow grid grid-cols-4 grid-rows-4 align-top text-left text-sm">
      <p className="col-span-1 font-medium">ผู้ซื้อ</p>
      <p className="col-span-3 font-normal">{user}</p>
      <p className="col-span-1 font-medium">ยอดชำระ</p>
      <p className="col-span-3 font-normal">{price} บาท</p>
      <p className="col-span-1 font-medium">วันที่ชำระเงิน </p>
      <p className="col-span-3 font-normal">
        {date ? formatThaiDate(date) : "ไม่ระบุวันที่"}
      </p>
      <p className="col-span-1 font-medium">สินค้า </p>
      <p className="col-span-3 font-normal underline  cursor-pointer">
        <Link href={`/product/${product_id}`}>{product}</Link>
      </p>
    </div>
  );
}

export default OrderDetails;
