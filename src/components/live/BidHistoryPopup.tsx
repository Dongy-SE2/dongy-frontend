"use client";

import { useState, useEffect } from "react";
import { CircleUserRound, Clock } from "lucide-react";

type Bid = {
  name: string;
  amount: number;
  date: string;
  time: string;
};

export default function BidHistoryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [bidHistory, setBidHistory] = useState<Bid[]>([
    { name: "กอเอ๋ย กอไก่", amount: 2500, date: "21 กุมภาพันธ์ 2568", time: "12:15 น." },
    { name: "กอเอ๋ย กอไก่", amount: 3000, date: "21 กุมภาพันธ์ 2568", time: "12:30 น." },
    { name: "กอเอ๋ย กอไก่", amount: 3500, date: "21 กุมภาพันธ์ 2568", time: "12:40 น." },
  ]);

  // จำลองการอัปเดตแบบเรียลไทม์ทุก 5 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setBidHistory((prevHistory) => [
        ...prevHistory,
        {
          name: "ผู้ประมูลใหม่",
          amount: Math.floor(Math.random() * 5000) + 1000,
          date: "21 กุมภาพันธ์ 2568",
          time: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }) + " น.",
        },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-36 h-9 mt-4 col-span-3 place-self-center bg-gray-600 font-medium text-base text-white rounded-lg"
      >
        ประวัติการประมูล
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[426px] h-[543px] flex flex-col">

            <h2 className="text-xl font-bold mb-4">ประวัติการประมูล</h2>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 flex-1">
              {bidHistory.map((bid, index) => (
                <div key={index} className="flex items-center bg-gray-200 p-3 rounded-lg shadow-sm">
                  <CircleUserRound className="size-16 text-[#0F172A] mr-3" />
                  <div className="flex-1 text-start">
                    <p className="font-normal text-lg">{bid.name}</p>
                    <p className="font-semibold text-lg">{bid.amount.toLocaleString()} บาท</p>
                  </div>
                  <div className="text-sm font-light text-gray-500 flex items-center">
                    <Clock className="size-7 mr-1" />
                    <div className="text-start">
                      <p>{bid.date}</p>
                      <p>{bid.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#059669] font-medium hover:underline"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
