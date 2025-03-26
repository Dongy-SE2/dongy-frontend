import { ArrowLeft } from "lucide-react";
import Link from "next/link";


interface Props {
  href: string;
}

const MovebackButton: React.FC<Props> = ({ href }) => {
  return (
    <Link
      href={href}
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
  );
};

export default MovebackButton;
