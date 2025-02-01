"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/profilePage")}
      className="p-3 rounded-full shadow-md bg-white hover:bg-gray-200 transition"
    >
      <ArrowLeft className="w-5 h-5 text-gray-800" />
    </button>
  );
};

export default BackButton;