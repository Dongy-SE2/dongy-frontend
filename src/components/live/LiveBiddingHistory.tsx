"use client";

import { useState, useEffect } from "react";
import { BidInfo } from "@/app/api/live/getLive";
import getLiveById from "@/app/api/live/getLive";
import BidHistoryPopup from "./BidHistoryPopup";
import { EventSourcePolyfill } from "event-source-polyfill";

type Props = {
  startTime: string;
  endTime: string;
  biddingHistory: BidInfo[] | null;
  liveDId: string;
  token: string;
};

export default function LiveBiddingHistory({
  startTime,
  endTime,
  biddingHistory,
  liveDId,
  token,
}: Props) {
  const [biddingList, setBiddingList] = useState<BidInfo[]>(
    biddingHistory || [],
  );

  useEffect(() => {
    const host = "http://34.135.145.173:1337";

    const eventSource = new EventSourcePolyfill(`${host}/api/sse/${liveDId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    eventSource.onmessage = async (event) => {
      const newMessage = JSON.parse(event.data);

      if (newMessage.event === "new_bid") {
        console.log("New bid received:", newMessage);
        const liveInfo = await getLiveById(liveDId, token);
        setBiddingList(liveInfo?.bids || []);
      } else if (newMessage.event === "close") {
        eventSource.close();
      }
    };

    eventSource.onerror = (error) => {
      console.log("SSE Error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [liveDId, token]); // ✅ เพิ่ม `token` เป็น dependency

  return (
    <div className="w-[365px] h-[180px] mt-4 p-7 bg-white rounded-lg shadow-md text-center">
      <div className="grid grid-cols-3 grid-rows-2">
        <p className="text-lg font-medium pb-3">เวลาเริ่มต้น</p>
        <p className="text-base font-normal text-gray-900 col-span-2 pb-3">
          {startTime}
        </p>
        <p className="text-lg font-medium">เวลาสิ้นสุด</p>
        <p className="text-base font-normal text-gray-900 col-span-2">
          {endTime}
        </p>
      </div>

      <BidHistoryPopup bidHistory={biddingList} />
    </div>
  );
}
