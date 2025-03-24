"use client";
import { Product } from "@/app/api/product/getProductList";
import PaymentMethod from "./PaymentMethod";
import { useContext } from "react";
import { Selection } from "./PaymentContext";
import Script from "next/script";
import paymentSubmit from "@/app/api/payment/paymentSubmit";

declare global {
  interface Window {
    Omise: any;
  }
}

const Total: React.FC<{ products: Array<Product> }> = ({ products }) => {
  const discount = 0;

  const { selection } = useContext(Selection);

  const selected: Product[] = products.filter(
    (value) => selection.findIndex((val) => val === value.id) !== -1,
  );

  const price: number = selected
    .map((prod) => prod.maxPrice)
    .reduce((a, b) => a + b, 0);

  const tax = parseFloat((price * 0.07).toFixed(2));
  const total = parseFloat((price + tax - price).toFixed(2));

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
        (status: any, res: any) => console.log(res),
      );
    }

    if (scb === "on") {
      window.Omise.createSource(
        "mobile_banking_scb",
        {
          amount: total * 100,
          currency: "THB",
        },
        (status: any, res: any) => console.log(res),
      );
    }

    if (kplus === "on") {
      window.Omise.createSource(
        "mobile_banking_kbank",
        {
          amount: total * 100,
          currency: "THB",
        },
        (status: any, res: any) => console.log(res),
      );
    }
  };

  return (
    <form action={TransanctionProcess}>
      <Script
        type="text/javascript"
        src="https://cdn.omise.co/omise.js"
        data-key={process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY}
        data-amount="12345"
        data-currency="THB"
        deta-default-payment-methods="mobile_banking_kbank"
      />
      <h2 className="text-xl font-medium mb-2">ยอดที่ต้องชำระ</h2>
      <div className="flex flex-row justify-evenly bg-white px-7 py-5 rounded-xl shadow-md text-gray-600 text-sm mb-4">
        <div className="mr-14">
          <p>รวมยอดสินค้าสุทธิ</p>
          <p>ภาษีมูลค่าเพิ่ม 7%</p>
          <p>รวมภาษีมูลค่าเพิ่ม</p>
        </div>
        <div className="mr-5 text-right w-24">
          <p>{price} บาท</p>
          <p>{tax} บาท</p>
          <p>{price + tax} บาท</p>
        </div>{" "}
        <div className="w-[1px] bg-gray-200 mr-5" />
        <div className="mr-24 mt-1">
          <p className="mb-1">ส่วนลด</p>
          <p>ยอดที่ต้องชำระ</p>
        </div>
        <div className="text-right mt-1">
          <p>{discount} บาท</p>
          <p className="text-green-600 font-semibold text-lg mt-[-0.075rem] w-20">
            {total} บาท
          </p>
        </div>
      </div>
      <h2 className="text-xl font-medium mb-2">ข้อมูลจัดส่ง</h2>
      <div className="flex flex-row bg-white text-gray-600 text-sm px-7 py-5 rounded-xl shadow-md mb-4">
        <div className="mr-8">
          <div className="flex flex-row mb-2">
            <p className="mr-16 font-medium">
              ชื่อผู้รับ<span className="text-red-500">*</span>
            </p>
            <input
              className="bg-gray-100 rounded-md px-[5px] py-[3px] w-[18rem]"
              id="name"
              type="text"
            />
          </div>
          <div className="flex flex-row mb-2">
            <p className="mr-[1.85rem] font-medium">
              เบอร์โทรศัพท์<span className="text-red-500">*</span>
            </p>
            <input
              className="bg-gray-100 rounded-md px-[5px] py-[3px] w-[18rem]"
              id="telephone"
              type="tel"
            />
          </div>
          <div className="flex flex-row">
            <p className="mr-[3.0rem] font-medium">
              ที่อยู่จัดส่ง<span className="text-red-500">*</span>
            </p>
            <textarea
              id="address"
              className="bg-gray-100 rounded-md px-[5px] py-[3px] w-[19rem] h-[3rem] resize-none"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-medium mb-2">วิธีการชำระเงิน</h2>
      <PaymentMethod />
      <div className="w-full flex justify-end mt-3">
        <button
          type="submit"
          className="cursor-pointer bg-green-500 rounded-lg px-11 py-2 text-white font-medium"
        >
          ต่อไป
        </button>
      </div>
    </form>
  );
};

export default Total;
