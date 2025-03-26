"use client";
import PaymentMethod from "./PaymentMethod";
import { useContext } from "react";
import { Selection } from "./PaymentContext";
import Script from "next/script";
import paymentSubmit from "@/app/api/payment/paymentSubmit";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Omise: any;
  }
}

const Total: React.FC = () => {
  const discount = 0;

  const { selection } = useContext(Selection);
  const router = useRouter();

  let price: number | null = Number(selection?.price);
  price = price ? (price < 300 ? 300 : price) : 0;

  const tax = parseFloat((price * 0.07).toFixed(2));
  const total = parseFloat((price + tax).toFixed(2));
  const session = useSession();

  const TransanctionProcess = async (data: FormData) => {
    const promptpay = data.get("promptpay")?.toString();
    const scb = data.get("scb")?.toString();
    const kplus = data.get("kplus")?.toString();

    window.Omise.setPublicKey(process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY);
    if (promptpay === "on") {
      await window.Omise.createSource(
        "promptpay",
        {
          amount: total * 100,
          currency: "THB",
        },
        async (status: any, res: any) => {
          if (status === 200 && selection) {
            res.name = selection.name;
            res.order = selection.id;
            if (
              (await paymentSubmit(res, session?.data?.user.jwt || "")) === 200
            ) {
              router.replace("/payment/success");
            }
          }
        },
      );
    }

    if (scb === "on") {
      window.Omise.createSource(
        "mobile_banking_scb",
        {
          amount: total * 100,
          currency: "THB",
        },
        async (status: any, res: any) => {
          if (status === 200 && selection) {
            res.name = selection.name;
            res.order = selection.id;
            if (
              (await paymentSubmit(res, session?.data?.user.jwt || "")) === 200
            ) {
              router.replace("/payment/success");
            }
          }
        },
      );
    }

    if (kplus === "on") {
      window.Omise.createSource(
        "mobile_banking_kbank",
        {
          amount: total * 100,
          currency: "THB",
        },
        async (status: any, res: any) => {
          if (status === 200 && selection) {
            res.name = selection.name;
            res.order = selection.id;
            if (
              (await paymentSubmit(res, session?.data?.user.jwt || "")) === 200
            ) {
              router.replace("/payment/success");
            }
          }
        },
      );
    }
  };

  return (
    <form action={TransanctionProcess}>
      <Script type="text/javascript" src="https://cdn.omise.co/omise.js" />
      <h2 className="text-xl font-medium mb-2">ยอดที่ต้องชำระ</h2>
      <div className="flex flex-row justify-evenly bg-white px-7 py-5 rounded-xl shadow-md text-gray-600 text-sm mb-4">
        <div className="mr-14">
          <p>ยอดสินค้าสุทธิ</p>
          <p>ภาษีมูลค่าเพิ่ม 7%</p>
          <p>รวมภาษีมูลค่าเพิ่ม</p>
        </div>
        <div className="mr-5 text-right w-28">
          <p>{price} บาท</p>
          <p>{tax} บาท</p>
          <p>{price + tax} บาท</p>
        </div>{" "}
        <div className="w-[1px] bg-gray-200 mr-5" />
        <div className="mr-8 mt-1">
          <p className="mb-1">ส่วนลด</p>
          <p>ยอดที่ต้องชำระ</p>
        </div>
        <div className="text-right mt-1">
          <p>{discount} บาท</p>
          <p className="text-green-600 font-semibold text-lg mt-[-0.075rem] w-36">
            {total} บาท
          </p>
        </div>
      </div>
      <h2 className="text-xl font-medium mt-5 mb-2">ข้อมูลจัดส่ง</h2>

      <div className="grid grid-cols-3 gap-4 items-center bg-white px-7 py-5 rounded-xl border bg-opacity-70 border-gray-100">
        <p className="mr-16 text-sm">
          ชื่อผู้รับ<span className="text-red-500">*</span>
        </p>
        <input
          className="bg-white border rounded-md px-3 py-1 w-[18rem] text-sm col-span-2"
          id="name"
          type="text"
          placeholder="ชื่อผู้รับ"
        />
        <p className="mr-[1.85rem] text-sm">
          เบอร์โทรศัพท์<span className="text-red-500">*</span>
        </p>
        <input
          className="bg-white border rounded-md px-3 py-1 w-[18rem] text-sm col-span-2"
          id="telephone"
          type="tel"
          placeholder="เบอร์โทรศัพท์"
        />
        <p className="mr-[3.0rem] text-sm">
          ที่อยู่จัดส่ง<span className="text-red-500">*</span>
        </p>
        <textarea
          id="address"
          className="bg-white border rounded-md px-3 py-2 w-[19rem] h-[3rem] resize-none text-sm col-span-2"
          spellCheck="false"
          placeholder="ที่อยู่จัดส่ง"
        />
      </div>

      <h2 className="text-xl font-medium mt-5 mb-2">วิธีการชำระเงิน</h2>
      <PaymentMethod />
      <div className="w-full flex justify-end mt-5">
        <input
          type="submit"
          className="cursor-pointer bg-emerald-500 rounded-lg px-11 py-2 text-white font-medium"
          value="ต่อไป"
        />
      </div>
    </form>
  );
};

export default Total;
