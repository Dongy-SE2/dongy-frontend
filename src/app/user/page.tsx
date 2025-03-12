import ActionButton from "@/components/ActionButton";
import ProfileCard from "@/components/ProfileCard";

import { FolderPlus, Grid2X2, IdCard, BoomBox } from "lucide-react";

export default function User() {
  return (
    <div className="min-h-screen w-full justify-center items-center bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9]">
      <h1 className="flex place-content-evenly">
        <div className="w-[300px] h-[80px] font-semibold text-black text-3xl px-6 py-16">
          ข้อมูลส่วนบุคคล
        </div>
        <ProfileCard
          key={0}
          Username={"วสุพล ดิสสานนท์"}
          UserType={"ผู้ชาย"}
          ImageSrc={"/image/ProfilePicture.jpg"}
        />
      </h1>

      <div className="flex px-9 place-content-center">
        <ActionButton
          key={1}
          ActionName={"เพิ่มสินค้า"}
          Icon={<FolderPlus />}
          route={"/product"}
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
          route={"/user/manage"}
        />
      </div>
    </div>
  );
}
