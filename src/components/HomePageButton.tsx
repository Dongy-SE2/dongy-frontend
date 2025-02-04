"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface HomePageButtonProps {
  name: string;
  color: string;
  route: string;
}

const HomePageButton: React.FC<HomePageButtonProps> = ({ name, color, route }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className="w-[160px] h-[41px] m-3 rounded-md transition items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-white text-lg font-medium">{name}</div>
    </button>
  );
};

export default HomePageButton;
