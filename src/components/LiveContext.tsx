"use client";

import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface SelectionContext {
  selection: number;
  setSelect?: React.Dispatch<React.SetStateAction<number>>;
}
const Selection = createContext<SelectionContext>({
  selection: 0,
  setSelect: undefined,
});

export default function LiveContext({ children }: Props) {
  const [selection, setSelect] = useState<number>(0);

  return (
    <Selection.Provider value={{ selection, setSelect }}>
      {children}
    </Selection.Provider>
  );
}

export { Selection };
