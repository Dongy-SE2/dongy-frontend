"use client";

import BidHistoryPopup from "./bidHistoryPopup";

type Bid = {
  name: string;
  amount: number;
  date: string;
  time: string;
};

type Props = {
  startTime: string;
  endTime: string;
  biddingHistory: Bid[];
};

export default function LiveBiddingHistory({ startTime, endTime, biddingHistory }: Props) {
  return (
    <div className="w-[365px] h-[180px] mt-4 p-7 bg-white rounded-lg shadow-md text-center">

      <div className="grid grid-cols-3 grid-rows-2">
        <p className="text-lg font-medium pb-3">เวลาเริ่มต้น</p>
        <p className="text-base font-normal text-gray-900 col-span-2 pb-3">{startTime}</p>
        <p className="text-lg font-medium">เวลาสิ้นสุด</p>
        <p className="text-base font-normal text-gray-900 col-span-2">{endTime}</p>
      </div>

      <BidHistoryPopup/>
    </div>
  );
}
