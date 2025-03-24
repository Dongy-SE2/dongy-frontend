"use client";
import { useContext, useEffect, useState } from "react";
import { Selection } from "./LiveContext";
import Image from "next/image";
import { LiveInfo } from "@/app/api/live/getLiveList";
import { Clock, User } from "lucide-react";
import deleteLive from "@/app/api/live/deleteLive";
interface Props {
  lives: LiveInfo[];
  token: string;
}

const formatDateForInput = (isoDate: string) => {
  if (!isoDate) return "";
  return isoDate.slice(0, 16);
};

const LiveManage: React.FC<Props> = ({ lives, token }) => {
  const { selection } = useContext(Selection);
  const live = lives[selection] || lives[0];

  const [liveName, setLiveName] = useState(live?.title || "");
  const [product, setProduct] = useState(live?.product || "");
  const [startDate, setStartDate] = useState(
    formatDateForInput(live?.startDate || "")
  );
  const [endDate, setEndDate] = useState(
    formatDateForInput(live?.endDate || "")
  );
  const [status, setStatus] = useState(live?.status || "public");
  const [link, setLink] = useState(live?.link || "");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    setLiveName(live?.title || "");
    setProduct(live?.product || "");
    setStartDate(formatDateForInput(live?.startDate || ""));
    setEndDate(formatDateForInput(live?.endDate || ""));
    setStatus(live?.status || "public");
    setLink(live?.link || "");
  }, [live]);

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
    const interval = setInterval(updateTimeLeft, 60000); // Refresh every 1 min
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* 🔹 Live Preview */}
      <div className="flex flex-row bg-white px-6 py-6 rounded-lg shadow-md w-[32rem]">
        <Image
          src={live?.images?.[0]?.url || "/default-image.jpg"}
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

      {/* 🔹 Live Management Form */}
      <div className="text-base px-6 py-6 bg-white shadow-md mt-6 rounded-lg">
        {/* Live Name */}
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

        {/* Product Name */}
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

        {/* Start Date */}
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

        {/* End Date */}
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

        {/* Live Status */}
        <div className="flex flex-row mb-3">
          <p>
            สถานะ<span className="text-red-600 text-sm">*</span>
          </p>
          <select
            className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-[2.125rem] w-28"
            value={status}
            onChange={(e) => setStatus(e.currentTarget.value)}
          >
            <option>public</option>
            <option>private</option>
            <option>ongoing</option>
          </select>
        </div>

        {/* Live Link */}
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
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex flex-row justify-evenly w-full px-16">
        <button
          className="rounded-lg bg-red-400 px-12 py-2 text-white"
          onClick={async (e) => {
            e.preventDefault();
            const res = await deleteLive(live.did, token || "");
            if (res) {
              alert("Success!");
            }
          }}
        >
          ลบ
        </button>
        <button className="rounded-lg bg-green-500 px-7 py-2 text-white">
          เริ่มทันที
        </button>
        <button
          className="rounded-lg bg-gray-500 px-5 py-2 text-white"
          onClick={() => navigator.clipboard.writeText(link)}
        >
          คัดลอกลิงค์
        </button>
      </div>
    </form>
  );
};

export default LiveManage;
