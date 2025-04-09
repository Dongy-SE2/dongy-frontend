import { Order } from "@/app/api/order/getBuyerOrderList";
import Link from "next/link";
import Status from "./Status";

const statusMap = {
  อยู่ระหว่างจัดส่ง: (
    <Status
      name={"อยู่ระหว่างจัดส่ง"}
      textColor="yellow-600"
      color="yellow-100"
    />
  ),
  รอการจัดส่ง: (
    <Status name={"รอการจัดส่ง"} textColor="gray-600" color="gray-100" />
  ),
  ได้รับสินค้าแล้ว: (
    <Status name={"ได้รับสินค้าแล้ว"} textColor="green-700" color="green-100" />
  ),
};

const OrderInfo: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <>
      <p className="font-medium text-sm">ชื่อผู้รับ</p>
      <p className="text-sm">{order.receiver}</p>
      <p className="font-medium text-sm">เบอร์โทรศัพท์</p>
      <p className="text-sm">{order.tel}</p>
      <p className="font-medium text-sm">ที่อยู่จัดส่ง</p>
      <p className="text-sm w-96">{order.location}</p>
      <p className="font-medium text-sm">จัดส่งโดย</p>
      <p className="text-sm">{order.courier}</p>
      <p className="font-medium text-sm">Tracking No</p>
      {!order.trackingId ? (
        <p className="text-sm">-</p>
      ) : !order.trackingUrl ? (
        <p className="text-sm">{order.trackingId}</p>
      ) : (
        <Link href={order.trackingUrl}>{order.trackingId}</Link>
      )}
      {statusMap[order.state]}
    </>
  );
};

export default OrderInfo;
