"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Selection } from "./LiveContext";
import { LiveInfo } from "@/app/api/live/getLiveList";

const LiveItem: React.FC<{
  live: LiveInfo;
  index: number;
}> = ({ live, index }) => {
  const [isSelect, changeSelect] = useState(false);
  const { selection, setSelect } = useContext(Selection);
  useEffect(() => {
    if (!setSelect) return;
    if (index !== selection) changeSelect(false);
    else changeSelect(true);
  }, [index, setSelect, selection]);
  console.log(live);
  return (
    <button
      className={`flex flex-row justify-between ${!isSelect ? "bg-gray-200" : "bg-gray-600"} px-2 py-2 text-sm rounded-xl my-3 text-left w-full`}
      onClick={() => {
        if (setSelect) setSelect(index);
        changeSelect(true);
      }}
    >
      <div>
        <Image
          src={live.images[0]?.url}
          alt={live.title}
          width={400}
          height={400}
          className="w-16 h-16 inline-block object-cover rounded-xl mr-4"
        />
        <div className="inline-flex flex-col h-full align-middle justify-center">
          <p
            className={`${!isSelect ? "text-gray-800" : "text-white"} break-words w-36`}
          >
            {live.title}
          </p>
        </div>
      </div>
      <div>
        <ShoppingBag
          className={`inline-flex flex-col h-full align-middle justify-center ${!isSelect ? "text-gray-500" : "text-white"}`}
        />
      </div>
    </button>
  );
};

export default LiveItem;
