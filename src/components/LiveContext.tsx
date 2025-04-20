"use client";

import { LiveInfo } from "@/app/api/live/getLiveList";
import { createContext, useState } from "react";

interface Props {
  lives: LiveInfo[];
  children: React.ReactNode;
}

interface SelectionContext {
  selection: number;
  lives: LiveInfo[];
  setSelect?: React.Dispatch<React.SetStateAction<number>>;
  setLives?: React.Dispatch<React.SetStateAction<LiveInfo[]>>;
}
const Selection = createContext<SelectionContext>({
  selection: 0,
  lives: [],
});

export default function LiveContext({ children, lives: serverLives }: Props) {
  const [selection, setSelect] = useState<number>(0);
  const [lives, setLives] = useState<LiveInfo[]>(serverLives);

  return (
    <Selection.Provider value={{ selection, setSelect, lives, setLives }}>
      {children}
    </Selection.Provider>
  );
}

export { Selection };
