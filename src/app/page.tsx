import Navbar from "@/app/components/Navbar";
import ActionButton from "./components/ActionButton";

import { FolderPlus, Grid2X2 } from 'lucide-react';
import { IdCard } from 'lucide-react';
import { Grid2x2 } from 'lucide-react';

export default function Home() {0
  return (
    <div className="bg-[#F6F7F9] justify-center items-center">
      <Navbar />
      <div className="flex place-content-evenly">
      <div className="w-80 h-20 font-semibold text-black text-3xl px-6 py-16">
        ข้อมูลส่วนบุคคล
        </div>
      <div className="w-64 h-20 font-semibold text-black text-3xl px-6 py-16">fsdogfjpokm</div>
      </div>
      <div className="flex px-9 place-content-center">
        <ActionButton key = {1}
            Name = {"เพิ่มสินค้า"} 
            Icon = {<FolderPlus/>}
            route = {"/AddProductPage"}
        />
        <ActionButton key = {2}
            Name = {"จัดการสินค้า"} 
            Icon = {<Grid2X2/>}
            route = {"/AddProductPage"}
        />
        <ActionButton key = {3}
            Name = {"ข้อมูลส่วนตัว"} 
            Icon = {<IdCard/>}
            route = {"/AddProductPage"}
        />
        <ActionButton key = {4}
            Name = {"-"} 
            Icon = {""}
            route = {""}
        />
      </div>

      
    </div>
  );
}