"use client";
import { useState } from "react";
import { LiveInfo } from "@/app/api/live/getLiveList";
import LiveItem from "./LiveItem";
import createLive from "@/app/api/live/createLive";
import { useRouter } from "next/navigation";

const LiveList: React.FC<{
  lives: Array<LiveInfo>;
  token: string;
  sellerId: string;
}> = ({ lives, token, sellerId }) => {
  const [liveList, setLiveList] = useState(lives);
  const router = useRouter();

  const addNewLive = async () => {
    const res = await createLive(token, sellerId);
    // router.refresh();
    window.location.reload(); // ❌ Alternative if refresh() fails
  };
  console.log(token);

  return (
    <div className="mb-6">
      <div className="w-80 h-fit max-h-[606px] bg-white shadow-md rounded-xl p-4 overflow-y-auto">
        {liveList.map((live, index) => (
          <LiveItem live={live} key={live.id} index={index} />
        ))}
        <button
          className="w-full border-dashed border-2 border-gray-300 rounded-lg text-gray-500 py-4"
          onClick={addNewLive}
        >
          + เพิ่มไลฟ์ใหม่
        </button>
      </div>
    </div>
  );
};

export default LiveList;
