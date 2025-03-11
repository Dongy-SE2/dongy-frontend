"use client";

import Image from "next/image";

type Props = {
  src: string;
  isLive: boolean;
};

export default function ProductImageCard({ src, isLive }: Props) {
  return (
    <div className="relative w-[385px] h-[221px]">
      <Image
        src={src}
        alt="Product Image"
        width={385}
        height={221}
        className="rounded-lg object-cover w-full"
      />

      {/* Live condition */}
      {isLive && (
        <div className="absolute top-2 left-2 bg-[#10B981] px-2 py-1 rounded-lg flex items-center space-x-1">
          <div className="bg-white rounded-full w-3 h-3" />
          <div className="text-white text-base">LIVE</div>
        </div>
      )}
    </div>
  );
}
