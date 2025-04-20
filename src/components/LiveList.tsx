"use client";
import { useContext } from "react";
import LiveItem from "./LiveItem";
import createLive from "@/app/api/live/createLive";
import { useRouter } from "next/navigation";
import { Selection } from "./LiveContext";
import getLiveList from "@/app/api/live/getLiveList";

const LiveList: React.FC<{
  token: string;
  sellerId: string;
}> = ({ token, sellerId }) => {
  const router = useRouter();

  const { lives: liveList, setLives } = useContext(Selection);

  const addNewLive = async () => {
    await createLive(token, sellerId);
    const newLives = await getLiveList(token);
    if (setLives) setLives(newLives);
  };
  return (
    <div className="mb-6">
      <div className="w-80 max-h-[606px] bg-white shadow-md rounded-xl px-4 py-1 overflow-y-auto">
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
