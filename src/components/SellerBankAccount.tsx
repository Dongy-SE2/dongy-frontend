"use client";

import MovebackButton from "@/components/MovebackButton";
import { Input } from "@/components/ui/input";
import sellerPayment from "@/app/api/sellerPayment/sellerPayment";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Waveform } from "ldrs/react";
import 'ldrs/react/Waveform.css'
import { useState } from "react";

function SellerBankAccount({ token }: { token: string }) {
  const [loading,setLoading] = useState(false)
  const handleSubmit = async (data: FormData) => {
    // EDIT HERE (API HANDLER)
    setLoading(true)
    const response = await sellerPayment(data, token);
    if (response.success) {
      alert("บันทึกข้อมูลสำเร็จ");

      redirect("/user");
    } else {
      console.error("Seller Payment Error:", response.message);
      alert("บันทึกข้อมูลไม่สำเร็จ");
    }
    setLoading(false)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-6 py-14">
      <div className="w-3/5 mx-auto">
        <div className="flex">
          <h1 className="text-3xl font-bold mb-4">สร้างบัญชีผู้ขาย</h1>
          <span className="ml-auto">
            <MovebackButton href="login" />
          </span>
        </div>

        <div className="flex flex-row gap-5 mt-5 items-center justify-between">
          <form action={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-medium">บัญชีธนาคาร</h2>
                <div className="bg-white w-96 h-fit grid grid-cols-4 gap-5 p-4 items-center">
                  <p className="text-sm max-w-16">
                    ธนาคาร<span className="text-red-500">*</span>
                  </p>
                  <select
                    name="bank"
                    className="col-span-3 max-w-32 text-sm py-1"
                  >
                    <option>กสิกรไทย</option>
                    <option>ไทยพาณิชย์</option>
                  </select>
                  <p className="text-sm col-span-1">
                    เลขบัญชี<span className="text-red-500">*</span>
                  </p>
                  <Input
                    name="account"
                    pattern="\d{10}"
                    maxLength={10}
                    type="text"
                    className="col-span-3 bg-gray-100 px-2 py-1 rounded-md text-sm w-full"
                    required
                  />
                </div>
              </div>
              {/* <div className="flex flex-col gap-1">
                <h2 className="font-medium">พร้อมเพย์</h2>
                <div className="bg-white w-96 h-fit grid grid-cols-4 gap-5 p-4 items-center">
                  <p className="text-sm max-w-16">
                    QR Code<span className="text-red-500">*</span>
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    className="col-span-3 w-full text-xs"
                    name="image"
                    required
                  />
                </div>
              </div> */}
              <div className="flex flex-col items-center">

              {loading && (
  <div className="flex flex-col items-center justify-center mb-3 ">
    <p className="text-black text-sm mb-2">Loading...</p>
    <Waveform size="20" speed="1" color="black" stroke="1" />
  </div>
)}

                {!loading && (<Button
                  type="submit"
                  className="bg-emerald-500 text-white rounded-md w-28 px-3 py-1 text-sm"
                >
                  ยืนยัน
                </Button>)}
              </div>
            </div>
          </form>

          {/* <Image
            src="image/MobilePayment.svg"
            width={350}
            height={350}
            alt="Picture of the author"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default SellerBankAccount;
