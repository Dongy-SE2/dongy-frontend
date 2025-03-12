"use client";
import { useContext, useEffect, useState } from "react";
import { Selection } from "./LiveContext";
import Image from "next/image";
import { LiveInfo } from "@/app/api/live/getLive";
import { Clock, User } from "lucide-react";

interface Props {
  lives: LiveInfo[];
}
const LiveManage: React.FC<Props> = ({ lives }) => {
  const { selection } = useContext(Selection);
  const live = lives[selection];
  const [liveName, setLiveName] = useState(live.title);
  useEffect(() => {
    setLiveName(live.title);
  }, [live, setLiveName]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-row bg-white px-6 py-6 rounded-lg shadow-md w-[32rem]">
        <Image
          src={live.image}
          width={400}
          height={400}
          alt={live.title}
          className="w-52 h-32 object-cover rounded-lg"
        />
        <div className="ml-5">
          <p className="bg-black text-white w-24 h-6 text-center rounded-md text-sm">
            ตัวอย่าง
          </p>
          <h3 className="font-semibold text-lg">{liveName}</h3>
          <p className="text-gray-500 text-sm align-middle">
            <User className="inline-block" width={"1rem"} /> username
          </p>
          <p className="text-gray-500 text-sm align-middle">
            <Clock className="inline-block" width={"1rem"} /> time
          </p>
        </div>
      </div>
      <div className="text-base px-6 py-6 align-middle bg-white shadow-md mt-6 rounded-lg">
        <div className="flex flex-row mb-3">
          <p>
            ชื่อไลฟ์<span className="text-red-600 text-sm">*</span>
          </p>
          <input
            className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-8 w-72"
            value={liveName}
            onChange={(e) => setLiveName(e.currentTarget.value || "")}
          />
        </div>
        <div className="flex flex-row mb-3">
          <p>
            สินค้า<span className="text-red-600 text-sm">*</span>
          </p>
          <input className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-10 w-72" />
        </div>
        <div className="flex flex-row mb-3">
          <p>
            เริ่มต้น<span className="text-red-600 text-sm">*</span>
          </p>
          <input
            className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-8 w-52"
            type="datetime-local"
          />
        </div>
        <div className="flex flex-row mb-3">
          <p>
            สิ้นสุด<span className="text-red-600 text-sm">*</span>
          </p>
          <input
            className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-9 w-52"
            type="datetime-local"
          />
        </div>
        <div className="flex flex-row mb-3">
          <p>
            สถานะ<span className="text-red-600 text-sm">*</span>
          </p>
          <select className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-sm ml-[2.125rem] w-28">
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
          <input className="bg-gray-100 px-2 py-1 rounded-lg text-gray-800 text-base ml-12 w-72" />
        </div>
      </div>
      <div className="mt-5 flex flex-row justify-evenly w-full px-16">
        <input
          type="submit"
          value="ลบ"
          className="cursor-pointer rounded-lg bg-red-400 px-12 py-2 text-white"
        />
        <input
          type="submit"
          value="เริ่มทันที"
          className="cursor-pointer rounded-lg bg-green-500 px-7 py-2 text-white"
        />
        <input
          type="submit"
          value="คัดลอกลิงค์"
          className="cursor-pointer rounded-lg bg-gray-500 px-5 py-2 text-white"
        />
      </div>
    </form>
  );
};

export default LiveManage;
