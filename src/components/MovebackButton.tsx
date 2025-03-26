"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Props {
  href?: string;
  back?: boolean;
}

const MovebackButton: React.FC<Props> = ({ back, href }) => {
  const router = useRouter();
  return !back ? (
    <Link
      href={href || ""}
      className="
        inline-grid
        text-center
        justify-items-center
        content-center
        rounded-full
        w-[48px] h-[48px]
        padding-5
        bg-white
        transition-[background-color]
        duration-200
        hover:bg-gray-200"
    >
            <ArrowLeft />
    </Link>
  ) : (
    <button
      onClick={() => router.back()}
      className="
        inline-grid
        text-center
        justify-items-center
        content-center
        rounded-full
        w-[48px] h-[48px]
        padding-5
        bg-white
        transition-[background-color]
        duration-200
        hover:bg-gray-200"
    >
      <ArrowLeft />
    </button>
  );
};

export default MovebackButton;
