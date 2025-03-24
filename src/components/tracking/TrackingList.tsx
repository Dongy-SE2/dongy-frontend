"use client";

import { useContext } from "react";
import { orderProvider } from "./OrderProvider";
import Image from "next/image";

interface OrderCardProps {
  order: any;
  selection: boolean;
}

function OrderCard({ order, selection }: OrderCardProps): React.ReactNode {
  return (
    <div className="flex flex-row">
      {/* <Image height={200} width={200}/> */}
      <div>
        <p>{order.product?.product_name}</p>
        <p>order.total_amount</p>
      </div>
    </div>
  );
}

export default function TrackingList(): React.ReactNode {
  const { orders, idx, changeIdx } = useContext(orderProvider);
  return <div></div>;
}
