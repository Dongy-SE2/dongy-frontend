import HomePageButton from "@/components/HomePageButton";
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-evenly items-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100%">
      <div className="flex justify-center items-stretch">
        <img src="/home_picture.svg" alt="Logo" className="pr-[83px]" />
        <div className="flex-col justify-start items-start place-content-start">
          <h1 className="font-semibold text-5xl text-center">Dongy Bitkub</h1>
          <div className="text-lg font-light text-black text-center pt-4">
            มิติใหม่แห่งการ
            <span className="text-lg font-semibold text-[#7C3AED]">ประมูล</span>
          </div>
          <QuoteCard></QuoteCard>
          <div className="flex justify-center items-center">
            <HomePageButton
              name={"เข้าสู่ระบบ"}
              color={"#374151"}
              route={"/login"}
            />
            <HomePageButton
              name={"สร้างบัญชีใหม่"}
              color={"#10B981"}
              route={"/register"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
