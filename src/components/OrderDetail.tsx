function OrderDetails({ user, price, method, date, product }: any) {
  return (
    <div className="w-[410px] h-[180px] p-4 border rounded-lg bg-white shadow space-y-2 grid grid-cols-4 grid-rows-4 align-top text-left text-sm">
      <p className="col-span-1 font-medium">ผู้ซื้อ</p>
      <p className="col-span-3 font-normal">{user}</p>
      <p className="col-span-1 font-medium">ยอดชำระ</p>
      <p className="col-span-1 font-normal"> {price} บาท</p>
      <p className="col-span-1 font-medium">ชำระผ่าน </p>
      <p className="col-span-1 font-normal">{method}</p>
      <p className="col-span-1 font-medium">วันที่ชำระเงิน </p>
      <p className="col-span-3 font-normal">{date}</p>
      <p className="col-span-1 font-medium">สินค้า </p>
      <p className="col-span-3 font-normal">{product}</p>
    </div>
  );
}

export default OrderDetails;
