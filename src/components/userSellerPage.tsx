import { FolderPlus, Grid2X2, IdCard, BoomBox, Truck } from "lucide-react";
import ActionButton from "@/components/ActionButton";

function SellerHomePage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">จัดการบัญชี</h1>
        <div></div>
      </div>

      <div className="px-9 place-content-center grid grid-cols-4 grid-row-2">
        <ActionButton
          key={1}
          ActionName={"เพิ่มสินค้า"}
          Icon={<FolderPlus />}
          route={"/product/manage/register"}
        />
        <ActionButton
          key={2}
          ActionName={"จัดการสินค้า"}
          Icon={<Grid2X2 />}
          route={"/product/manage"}
        />
        <ActionButton
          key={3}
          ActionName={"ข้อมูลส่วนตัว"}
          Icon={<IdCard />}
          route={"/user/profile"}
        />
        <ActionButton
          key={4}
          ActionName={"จัดการไลฟ์"}
          Icon={<BoomBox />}
          route={"/setlive"}
        />
        <ActionButton
          key={5}
          ActionName={"สินค้ารอจัดส่ง"}
          Icon={<Truck />}
          route={"/order"}
        />
      </div>
    </div>
  );
}

export default SellerHomePage;
