"use client";

import { type Order } from "@/app/api/order/getBuyerOrderList";
import { createContext, useState } from "react";

interface OrderSelection {
  orders: Order[];
  idx: number;
  changeIdx?: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children: React.ReactNode;
  value: Order[];
}

const orderProvider = createContext<OrderSelection>({
  orders: [],
  idx: 0,
});

export default function OrderProvider({ children, value }: Props) {
  const [idx, changeIdx] = useState<number>(0);
  return (
    <orderProvider.Provider value={{ orders: value, idx, changeIdx }}>
      {children}
    </orderProvider.Provider>
  );
}

export { orderProvider };
