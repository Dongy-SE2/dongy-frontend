"use client"; // Ensure this is a client-side component

import { useState } from "react";
import MovebackButton from "@/components/MovebackButton";
import LiveBiddingHistory from "@/components/live/LiveBiddingHistory";
import LiveProductInfo from "@/components/live/LiveProductInfo";
import BiddingInfoCard from "@/components/live/BiddingInfoCard";

interface Bid {
  name: string;
  amount: number;
  date: string;
  time: string;
}

const bidHistory: Bid[] = [
  {
    name: "กอไผ่ กอไผ่",
    amount: 2500,
    date: "21 กุมภาพันธ์ 2568",
    time: "12:15 น.",
  },
  {
    name: "กอไผ่ กอไผ่",
    amount: 3000,
    date: "21 กุมภาพันธ์ 2568",
    time: "12:30 น.",
  },
  {
    name: "กอไผ่ กอไผ่",
    amount: 3500,
    date: "21 กุมภาพันธ์ 2568",
    time: "12:40 น.",
  },
];

const currentBidding = "3000"; // Example current bid
const timeLeft = "20 นาที";

export default function LiveBidding() {
  const [productInfo, setProductInfo] = useState(null);
  const [biddingPrice, setBiddingPrice] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9]">
      <div className="flex justify-center items-center relative w-full pt-14 pb-6">
        {/* Live Stream */}
        <div className="w-full max-w-[724px] h-full max-h-[353px] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0"
            title="Bidding Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute right-96 top-14">
          <MovebackButton href="/product/view" />
        </div>
      </div>

      <div className="flex justify-center">
        <LiveProductInfo
          liveName="ประมูลรองเท้าสุดคุ้ม x2"
          productName="รองเท้า"
          sellerName="วสุพล ดิสสานนท์"
          productType="รองเท้า"
          productDescription="รองเท้าใส่ง่าย ใส่สบาย น้ำหนักเบา เหมาะสำหรับทุกโอกาส"
        />

        <div className="justify-center relative pl-5">
          <BiddingInfoCard
            currentBidding={currentBidding}
            timeLeft={timeLeft}
          />
          <LiveBiddingHistory
            startTime="21 กุมภาพันธ์ 2568 12.00 น."
            endTime="21 กุมภาพันธ์ 2568 14.00 น."
            biddingHistory={bidHistory}
          />
        </div>
      </div>
    </div>
  );
}
