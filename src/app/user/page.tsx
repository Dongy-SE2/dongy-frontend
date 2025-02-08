import Navbar from "@/components/Navbar";
import ActionButton from "@/components/ActionButton";
import ProfileCard from "@/components/ProfileCard";
import DeleteProductAlert from "@/components/DeleteProductAlert";

import { FolderPlus, Grid2X2, IdCard } from "lucide-react";
import InsertImageAlert from "@/components/InsertImageAlert";

export default function User() {
  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] bg-auto justify-center items-center">
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
          route={"/AddProductPage"}
        />
        <ActionButton
          key={2}
          ActionName={"จัดการสินค้า"}
          Icon={<Grid2X2 />}
          route={"/ManageProductPage"}
        />
        <ActionButton
          key={3}
          ActionName={"ข้อมูลส่วนตัว"}
          Icon={<IdCard />}
          route={"/user/profile"}
        />
        <ActionButton key={4} ActionName={"-"} Icon={""} route={""} />
      </div>
      <DeleteProductAlert productName="รองเท้า" />
      <InsertImageAlert />
    </div>
  );
}
