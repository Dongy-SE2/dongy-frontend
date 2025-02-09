import Image from "next/image";
import ProfileCard from "./ProfileCard";

function QuoteCard() {
  return (
    <div className="w-[691px] h-[178px]">
    <div className="w-[623px] h-[136px] p-2">
        <div className="relative">
            <div className="absolute -left-1 -top-5 size-[69px] bg-gradient-to-b from-[#129587] to-[#77A97E] opacity-50 rounded-full"></div>
            <div className="absolute -right-12 top-20 size-[69px] bg-gradient-to-b from-[#129587] to-[#77A97E] opacity-50 rounded-full"></div>
            <div className="absolute -right-16 top-14 size-[69px] bg-gradient-to-b from-[#129587] to-[#77A97E] opacity-100 rounded-full z-10"></div>

            <div className="flex w-full h-full bg-[#EAEAEA] opacity-80 rounded-[10px] m-4 p-4 pr-8 align-middle border-2 border-white"> 
                <img 
                    src="/image/ceo.jpg"
                    alt="CEO"
                    className="size-[96px] rounded-full object-cover shadow-md opacity-100"
                    />
                <div className="ml-4">
                    <p className="text-lg font-normal text-black text-center mt-2   ">
                        ผมตั้งใจและทุ่มเทอย่างสุดความสามารถเพื่อให้ Platform นี้เกิด
                        <span className="font-semibold">ประโยชน์</span>
                        สูงสุดต่อผู้ขายและผู้ซื้อ
                    </p>
                    <div className="text-xs font-normal text-black text-end mt-2">นายดาไล เจเอส, ผู้ก่อตั้งและ CEO</div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  );
}

export default QuoteCard;

