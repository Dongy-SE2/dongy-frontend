"use client";

import { Order } from "@/app/api/order/getBuyerOrderList";
import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface SelectionContext {
  selection: Order | null;
  setSelect?: React.Dispatch<React.SetStateAction<Order | null>>;
}
const Selection = createContext<SelectionContext>({
  selection: null,
  setSelect: undefined,
});

export default function PaymentContext({ children }: Props) {
  const [selection, setSelect] = useState<Order | null>(null);

  return (
    <Selection.Provider value={{ selection, setSelect }}>
      {children}
    </Selection.Provider>
  );
}

export { Selection };
