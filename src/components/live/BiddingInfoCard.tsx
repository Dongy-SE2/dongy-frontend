"use client";

import createBid from "@/app/api/bid/createBid";
import { useState } from "react";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";
import Popup from "./Popup";

type Props = {
  currentBidding: string;
  timeLeft: string;
  liveDId: string;
  userId: string;
  token: string;
};

export default function BiddingInfoCard({
  currentBidding,
  timeLeft,
  liveDId,
  userId,
  token,
}: Props) {
  const [biddingPrice, setBiddingPrice] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const placeBidding = async () => {
    setLoading(true);
    const biddingValue = Number(biddingPrice);
    const currentBiddingValue = Number(currentBidding);

    if (isNaN(biddingValue) || biddingValue <= currentBiddingValue) {
      setShowErrorPopup(true);
      setLoading(false)
      return;
    }

    try {
      const res = await createBid(
        token,
        liveDId,
        userId,
        biddingPrice, // Send bid amount correctly
      );

      console.log("✅ Bid placed successfully:", res);
      setBiddingPrice(""); // Reset input after successful bid
      window.location.reload();
    } catch (error) {
      console.error("❌ Error placing bid:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-[365px] p-7 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 grid-rows-[auto minmax(0,1fr)]">
        <p className="text-base font-medium text-left pb-3">ราคาปัจจุบัน</p>
        <p className="text-lg font-semibold text-[#10B981] text-left px-5 pb-3">
          {currentBidding} บาท
        </p>
        <p className="text-base font-medium text-left pb-3">เวลาที่เหลือ</p>
        <p className="text-lg font-normal text-gray-900 text-left px-5 pb-3">
          {timeLeft}
        </p>
      </div>
      <p className="text-base font-medium text-left col-span-2">
        ราคาที่ต้องการประมูล (บาท)
      </p>
      {/* Input & Submit Button */}
      <div className="mt-3 flex space-x-3 items-center justify-center w-full gap-3">
        <input
          type="number"
          placeholder="0"
          value={biddingPrice}
          onChange={(e) => setBiddingPrice(e.target.value)}
          className="bg-[#F3F4F6] rounded-lg w-40 h-11 text-center"
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center mb-5 ">
            <p className="text-black text-sm mb-2">Loading...</p>
            <Waveform size="20" speed="1" color="black" stroke="1" />
          </div>
        ) : (
          <button
            onClick={placeBidding}
            className="w-24 h-8 bg-[#10B981] font-medium text-base text-white rounded-lg"
          >
            ตกลง
          </button>
        )}
      </div>
      {showErrorPopup && <Popup setShowErrorPopup={setShowErrorPopup} />}
    </div>
  );
}
