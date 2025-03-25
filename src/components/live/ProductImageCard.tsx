"use client";

import Image from "next/image";

type Props = {
  src: string;
  isLive: boolean;
};

export default function ProductImageCard({ src, isLive }: Props) {
  return (
    <div className="relative ">
      <Image
        src={src}
        alt="Product Image"
        width={385}
        height={221}
        className="w-96 h-56 rounded-lg object-cover "
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
