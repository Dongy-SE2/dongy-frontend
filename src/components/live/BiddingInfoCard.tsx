"use client";

import { useState } from "react";

type Props = {
  currentBidding: string;
  timeLeft: string;
};

export default function BiddingInfoCard({ currentBidding, timeLeft }: Props) {
  const [biddingPrice, setBiddingPrice] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const placeBidding = () => {
    const biddingValue = Number(biddingPrice);
    const currentBiddingValue = Number(currentBidding);

    if (isNaN(biddingValue) || biddingValue <= currentBiddingValue) {
      setShowErrorPopup(true);
      return;
    }

    console.log("Bid placed successfully:", biddingValue);
  };

  return (
    <div className="w-[365px] h-[202px] p-7 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 grid-rows-3">
        <p className="text-base font-medium text-left pb-3">ราคาปัจจุบัน</p>
        <p className="text-xl font-semibold text-[#10B981] text-left px-5 pb-3">
          {currentBidding} บาท
        </p>
        <p className="text-base font-medium text-left pb-3">เวลาที่เหลือ</p>
        <p className="text-xl font-normal text-gray-900 text-left px-5 pb-3">
          {timeLeft}
        </p>
        <p className="text-base font-medium text-left col-span-2">ราคาที่ต้องการประมูล (บาท)</p>
      </div>

      <div className="flex space-x-3 items-center">
        <input
          type="number"
          placeholder="0"
          value={biddingPrice}
          onChange={(e) => setBiddingPrice(e.target.value)}
          className="bg-[#F3F4F6] rounded-lg w-40 h-11 text-center"
        />
        <button
          onClick={placeBidding}
          className="w-24 h-8 bg-[#10B981] font-medium text-base text-white rounded-lg"
        >
          ตกลง
        </button>
      </div>

      {showErrorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[426px] h-[130px] text-center">
            <p className="text-base font-normal">ราคาที่ท่านเลือกต่ำกว่าราคาปัจจุบัน</p>
            <p className="text-base font-normal">กรุณากรอกราคาใหม่</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowErrorPopup(false)}
                className="text-[#059669] font-medium hover:underline"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
