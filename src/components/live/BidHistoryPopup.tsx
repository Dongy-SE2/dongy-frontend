"use client";

import { useState, useEffect } from "react";
import { CircleUserRound, Clock } from "lucide-react";
import { BidInfo } from "@/app/api/live/getLive";

export default function BidHistoryPopup({
  bidHistory,
}: {
  bidHistory: BidInfo[] | null;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function formatThaiDate(isoString: string): string {
    const date = new Date(isoString);

    const day = date.getDate();
    const monthIndex = date.getMonth(); // 0-based index (Jan = 0)
    const yearBE = date.getFullYear() + 543; // Convert to Buddhist Era
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure two digits

    // Map month index to Thai month name
    const thaiMonths = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const monthThai = thaiMonths[monthIndex];

    return `${day} ${monthThai} ${yearBE} ${hours}.${minutes} น.`;
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-36 h-9 mt-4 col-span-3 place-self-center bg-gray-600 font-medium text-base text-white rounded-lg"
      >
        ประวัติการประมูล
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)} // ✅ ปิด popup เมื่อกดที่พื้นหลัง
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[426px] h-[543px] flex flex-col"
            onClick={(e) => e.stopPropagation()} // ✅ ป้องกันการปิดเมื่อกดใน popup
          >
            <h2 className="text-xl font-bold mb-4">ประวัติการประมูล</h2>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 flex-1">
              {bidHistory?.map((bid) => (
                <div
                  key={bid.id} // ✅ ใช้ `bid.id` แทน `index`
                  className="flex items-center bg-gray-200 p-3 rounded-lg shadow-sm"
                >
                  <CircleUserRound className="size-16 text-[#0F172A] mr-3" />
                  <div className="flex-1 text-start">
                    <p className="font-normal text-lg">
                      {bid.bidOwnerFirstName} {bid.bidOwnerLastName}
                    </p>
                    <p className="font-semibold text-lg">
                      {bid.bidPlaced.toLocaleString()} บาท
                    </p>
                  </div>
                  <div className="text-sm font-light text-gray-500 flex items-center">
                    <Clock className="size-7 mr-1" />
                    <div className="text-start">
                      <p>{formatThaiDate(bid.createdAt)}</p>
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
