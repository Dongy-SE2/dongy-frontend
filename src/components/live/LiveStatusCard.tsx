"use client";

import Link from "next/link";

type Props = {
  isLive: boolean;
  timeLeft: string | null;
};

export default function LiveStatusCard({ isLive, timeLeft }: Props) {
  return (
    <div>
      {isLive && (
        <div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
          <p className="text-lg font-semibold">สินค้านี้กำลังมีการประมูล</p>
          <p className="text-base text-gray-600">
            การประมูลจะสิ้นสุดในอีก {timeLeft} นาที
          </p>
          <Link href="/product/view/live">
            <button className="mt-3 bg-[#10B981] text-white px-4 py-2 rounded-lg">
              ดูการประมูล
            </button>
          </Link>
        </div>
      )}

      {!isLive && timeLeft !== null && (
        <div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
          <p className="text-lg font-semibold">สินค้านี้กำลังจะมีการประมูล</p>
          <p className="text-base text-gray-600">
            การประมูลจะเริ่มต้นในอีก {timeLeft} นาที
          </p>
          <button className="mt-3 bg-gray-600 text-white px-4 py-2 rounded-lg">
            ดูการประมูล
          </button>
        </div>
      )}

      {!isLive && timeLeft === null && (
        <div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
          <p className="text-lg font-semibold">สินค้านี้ยังไม่มีการประมูล</p>
        </div>
      )}
    </div>
  );
}
