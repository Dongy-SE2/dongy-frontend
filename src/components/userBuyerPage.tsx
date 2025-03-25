import { IdCard, Truck, ShoppingCart } from "lucide-react";
import ActionButton from "@/components/ActionButton";
import MovebackButton from "./MovebackButton";

function BuyerHomePage() {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-medium">จัดการบัญชี</h1>
        <MovebackButton href={"/product"} />
      </div>

      <div className="flex px-9 place-content-center">
        <ActionButton
          key={1}
          ActionName={"แก้ไขข้อมูล"}
          Icon={<IdCard />}
          route={"/product"}
        />
        <ActionButton
          key={2}
          ActionName={"สินค้าที่ประมูลได้"}
          Icon={<ShoppingCart />}
          route={"/payment"}
        />
        <ActionButton
          key={3}
          ActionName={"สินค้ารอจัดส่ง"}
          Icon={<Truck />}
          route={"/user/profile"}
        />
        <ActionButton key={4} ActionName={""} Icon={<div />} route={"/user"} />
      </div>
    </div>
  );
}

export default BuyerHomePage;
