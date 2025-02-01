"use client";
import { useRouter } from "next/navigation";

interface NextPageButtonProps {
  ActionName: string;
  Icon?: React.ReactNode;
  route: string;
}

const ActionButton: React.FC<NextPageButtonProps> = ({ ActionName: ActionName, Icon, route }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className="w-[150px] h-[150px] px-[12.5px] py-3 m-3 rounded-md shadow bg-[#FFFFFF] hover:bg-gray-100 active:bg-gray-200 transition flex flex-col items-center justify-center gap-2 font-medium text-sm"
    >
      <div className="w-[75px] h-[75px] rounded-full bg-[#E5E7EB] flex items-center justify-center">
        {Icon && <div className="w-8 h-8 text-[#4B5563]">{Icon}</div>}
      </div>
      <div className="text-black text-lg">{ActionName}</div>
    </button>
  );
};

export default ActionButton;