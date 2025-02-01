import Navbar from "@/app/components/Navbar";
import ActionButton from "./components/ActionButton";
import ProfileCard from "./components/ProfileCard";

import { FolderPlus, Grid2X2, IdCard } from 'lucide-react';

export default function Home() {0
  return (
    <div className="bg-[#F6F7F9] bg-auto justify-center items-center">
      <Navbar />
      <div className="flex place-content-evenly">
      <div className="w-[300px] h-[80px] font-semibold text-black text-3xl px-6 py-16">
        ข้อมูลส่วนบุคคล
        </div>
      <ProfileCard key = {0}
            UserName = {"วสุพล ดิสสานนท์"}
            UserType = {"ผู้ชาย"}
            ImageSrc = {"/image/ProfilePicture.jpg"}
      />

      </div>
      <div className="flex px-9 place-content-center">
        <ActionButton key = {1}
            ActionName = {"เพิ่มสินค้า"} 
            Icon = {<FolderPlus/>}
            route = {"/AddProductPage"}
        />
        <ActionButton key = {2}
            ActionName = {"จัดการสินค้า"} 
            Icon = {<Grid2X2/>}
            route = {"/AddProductPage"}
        />
        <ActionButton key = {3}
            ActionName = {"ข้อมูลส่วนตัว"} 
            Icon = {<IdCard/>}
            route = {"/AddProductPage"}
        />
        <ActionButton key = {4}
            ActionName = {"-"} 
            Icon = {""}
            route = {""}
        />
      </div>
    </div>
  );
}