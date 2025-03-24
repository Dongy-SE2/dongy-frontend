"use client";

import { useContext, useEffect, useState } from "react";
import { Selection } from "@/components/LiveContext";
import Image from "next/image";
import { LiveInfo } from "@/app/api/live/getLiveList";
import { Clock, User } from "lucide-react";

interface Props {
  lives: LiveInfo[];
}

export default function LiveManagePage({ lives }: Props) {
  const { selection } = useContext(Selection);
  const live = lives[selection] || lives[0]; // ✅ Fallback if `selection` is invalid

  // 📌 Controlled Inputs for Live Management
  const [liveName, setLiveName] = useState(live?.title || "");
  const [product, setProduct] = useState(live?.product || "");
  const [startDate, setStartDate] = useState(live?.startDate || "");
  const [endDate, setEndDate] = useState(live?.endDate || "");
  const [status, setStatus] = useState(live?.status || "เสื้อผ้า");
  const [link, setLink] = useState(live?.link || "");
  const [timeLeft, setTimeLeft] = useState(""); // ⏳ Time remaining text

  // 📌 Update State When `live` Changes
  useEffect(() => {
    setLiveName(live?.title || "");
    setProduct(live?.product || "");
    setStartDate(live?.startDate || "");
    setEndDate(live?.endDate || "");
    setStatus(live?.status || "เสื้อผ้า");
    setLink(live?.link || "");
  }, [live]);

  // 📌 Calculate Time Left Before Start Date
  useEffect(() => {
    if (!startDate) return;

    const updateTimeLeft = () => {
      const now = new Date();
      const start = new Date(startDate);
      const diffMs = start.getTime() - now.getTime();

      if (diffMs <= 0) {
        setTimeLeft("🔴 กำลังไลฟ์...");
      } else {
        const minutes = Math.floor(diffMs / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
          setTimeLeft(`เริ่มในอีก ${days} วัน`);
        } else if (hours > 0) {
          setTimeLeft(`เริ่มในอีก ${hours} ชั่วโมง`);
        } else {
          setTimeLeft(`เริ่มในอีก ${minutes} นาที`);
        }
      }
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 60000); // ⏳ Refresh every 1 min
    return () => clearInterval(interval); // Cleanup on unmount
  }, [startDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] flex justify-center p-6">
      <div className="w-[832px] items-center justify-center">
        <h1 className="text-3xl font-medium mb-6">จัดการไลฟ์</h1>

        {/* 🔹 Live Preview */}
        <div className="flex flex-row bg-white px-6 py-6 rounded-lg shadow-md w-full">
          <Image
            src={live?.image || "/default-image.jpg"}
            width={400}
            height={400}
            alt={live?.title || "Live Thumbnail"}
            className="w-52 h-32 object-cover rounded-lg"
          />
          <div className="ml-5">
            <p className="bg-black text-white w-24 h-6 text-center rounded-md text-sm">
              ตัวอย่าง
            </p>
            <h3 className="font-semibold text-lg">{liveName}</h3>
            <p className="text-gray-500 text-sm align-middle">
              <User className="inline-block" width={"1rem"} /> live.
            </p>
            <p className="text-gray-500 text-sm align-middle">
              <Clock className="inline-block" width={"1rem"} /> {timeLeft}
            </p>
          </div>
        </div>

        {/* 🔹 Live Management Inputs */}
        <form className="text-base px-6 py-6 bg-white shadow-md mt-6 rounded-lg">
          <div className="flex flex-row mb-3">
            <p>
              ชื่อไลฟ์<span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-8 w-72"
              value={liveName}
              onChange={(e) => setLiveName(e.currentTarget.value)}
            />
          </div>

          <div className="flex flex-row mb-3">
            <p>
              สินค้า<span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-10 w-72"
              value={product}
              onChange={(e) => setProduct(e.currentTarget.value)}
            />
          </div>

          <div className="flex flex-row mb-3">
            <p>
              เริ่มต้น<span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-8 w-52"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.currentTarget.value)}
            />
          </div>

          <div className="flex flex-row mb-3">
            <p>
              สิ้นสุด<span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-9 w-52"
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.currentTarget.value)}
            />
          </div>

          <div className="flex flex-row mb-3">
            <p>
              สถานะ<span className="text-red-600 text-sm">*</span>
            </p>
            <select
              className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-[2.125rem] w-28"
              value={status}
              onChange={(e) => setStatus(e.currentTarget.value)}
            >
              <option>เสื้อผ้า</option>
              <option>เครื่องเรือน</option>
              <option>อิเล็กทรอนิกส์</option>
              <option>ของสะสม</option>
              <option>หนังสือ</option>
              <option>อื่นๆ</option>
            </select>
          </div>

          <div className="flex flex-row">
            <p>
              ลิงค์<span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-base ml-12 w-72"
              value={link}
              onChange={(e) => setLink(e.currentTarget.value)}
            />
          </div>

          {/* 🔹 Action Buttons */}
          <div className="mt-5 flex flex-row justify-evenly w-full px-16">
            <button
              type="button"
              className="bg-red-400 px-12 py-2 text-white rounded-lg"
            >
              ลบ
            </button>
            <button
              type="button"
              className="bg-green-500 px-7 py-2 text-white rounded-lg"
            >
              เริ่มทันที
            </button>
            <button
              type="button"
              className="bg-gray-500 px-5 py-2 text-white rounded-lg"
              onClick={() => navigator.clipboard.writeText(link)}
            >
              คัดลอกลิงค์
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
