"use client";

import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(selection);
  }, [selection]);
  return (
    <Selection.Provider value={{ selection, setSelect }}>
      {children}
    </Selection.Provider>
  );
}

export { Selection };
