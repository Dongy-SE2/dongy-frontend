"use client";

import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface SelectionContext {
  selection: string[];
  setSelect?: React.Dispatch<React.SetStateAction<string[]>>;
}
const Selection = createContext<SelectionContext>({
  selection: [],
  setSelect: undefined,
});

export default function PaymentContext({ children }: Props) {
  const [selection, setSelect] = useState<string[]>([]);

  return (
    <Selection.Provider value={{ selection, setSelect }}>
      {children}
    </Selection.Provider>
  );
}

export { Selection };
