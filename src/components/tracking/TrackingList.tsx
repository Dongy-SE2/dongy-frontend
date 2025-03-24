"use client";

import { useContext } from "react";
import { orderProvider } from "./OrderProvider";
import { type Order } from "@/app/api/order/getBuyerOrderList";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

interface OrderCardProps {
  order: Order;
  selection: boolean;
  index: number;
}

function OrderCard({
  order,
  selection,
  index,
}: OrderCardProps): React.ReactNode {
  const { changeIdx } = useContext(orderProvider);
  return (
    <button
      className={`flex flex-row justify-between ${!selection ? "bg-gray-200" : "bg-gray-600"} px-2 py-2 text-sm rounded-xl my-3 text-left w-full`}
      onClick={() => (changeIdx ? changeIdx(index) : null)}
    >
      <div>
        <Image
          src={order.image}
          alt={order.name}
          width={200}
          height={200}
          className="w-16 h-16 inline-block object-cover rounded-xl mr-4"
        />
        <div className="inline-flex flex-col h-full align-middle justify-center">
          <p
            className={`${!selection ? "text-gray-800" : "text-white"} font-medium`}
          >
            {order.name}
          </p>
          <p className={!selection ? "text-gray-500" : "text-white"}>
            {order.price} บาท
          </p>
        </div>
      </div>
      <div>
        <ShoppingBag
          className={`inline-flex flex-col h-full align-middle justify-center ${!selection ? "text-gray-500" : "text-white"}`}
        />
      </div>
    </button>
  );
}

export default function TrackingList(): React.ReactNode {
  const { orders, idx } = useContext(orderProvider);
  return (
    <div className="w-64 h-72 bg-white shadow-md drop-shadow-sm rounded-xl px-4 py-1">
      {orders.map((order, i) => (
        <OrderCard
          key={order.trackingId}
          index={i}
          order={order}
          selection={idx === i}
        />
      ))}
    </div>
  );
}
