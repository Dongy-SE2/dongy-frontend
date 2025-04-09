"use client";

import { useContext } from "react";
import { orderProvider } from "./OrderProvider";
import OrderCard from "./OrderCard";

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
