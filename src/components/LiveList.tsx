"use client";
import { LiveInfo } from "@/app/api/live/getLive";
import LiveItem from "./LiveItem";

const LiveList: React.FC<{
  lives: Array<LiveInfo>;
}> = ({ lives }) => {
  return (
    <div className="mb-6">
      {/* <h2 className="text-xl font-medium mb-2">รายการสินค้าที่ประมูลได้</h2> */}
      <div className="w-80 h-[40rem] bg-white shadow-md rounded-xl px-4 py-1">
        {lives.map((live, index) => (
          <LiveItem live={live} key={live.id} index={index} />
        ))}
        <button className="w-full border-dashed border-2 border-gray-300 rounded-lg text-gray-500 py-4">
          + เพิ่มไลฟ์ใหม่
        </button>
      </div>
    </div>
  );
};

export default LiveList;
