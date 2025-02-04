import HomePageButton from "@/components/HomePageButton";

export default function Home() {
  return (
    <div>
      <h1 className="font-semibold text-5xl">Dongy Bitkub</h1>
      <div className="flex">
        <div className="text-lg font-light text-black">มิติใหม่แห่งการ
          <span className="text-lg font-semibold text-[#7C3AED]">ประมูล</span>
        </div>
        
      </div>
      <p className="text-lg font-normal text-black">
        ผมตั้งใจและทุ่มเทอย่างสุดความสามารถเพื่อให้ Platform นี้เกิด
        <span className="text-lg font-semibold text-black">ประโยชน์</span>
        สูงสุดต่อผู้ขายและผู้ซื้อ
      </p>
      <div className="text-xs font-normal text-black justify-end">นายดาไล เจเอส, ผู้ก่อตั้งและ CEO</div>

      <div className="flex">
        <HomePageButton
        name = {"เข้าสู่ระบบ"}
        color = {'#374151'}
        route = {'/login'}
        />
        <HomePageButton
        name = {"สร้างบัญชีใหม่"} 
        color = {"#10B981"}
        route = {"/register"}
        />
      </div>
    </div>
  );
}
