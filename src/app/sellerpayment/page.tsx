"use client";
import { Button } from "@/components/ui/button";
import MovebackButton from "@/components/MovebackButton";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import sellerPayment from "../api/sellerPayment/sellerPayment";
import { redirect } from "next/navigation";

function SellerPaymentPage() {
  const [image, setImage] = useState(null);
  const [account, setAccount] = useState("");
  const [bank, setBank] = useState("กสิกรไทย");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("bank", bank);
    formData.append("account", account);

    // EDIT HERE (API HANDLER)
    const response = await sellerPayment(formData);
    if (response.success) {
      console.log("Bank: " + formData.get("bank"));
      console.log("Account: " + formData.get("account"));
      console.log(formData.get("image"));
      alert("บันทึกข้อมูลสำเร็จ");

      redirect("/user");
    } else {
      console.error("Seller Payment Error:", response.message);
      alert("บันทึกข้อมูลไม่สำเร็จ");
    }
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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-medium">บัญชีธนาคาร</h2>
                <div className="bg-white w-96 h-fit grid grid-cols-4 gap-5 p-4 items-center">
                  <p className="text-sm max-w-16">
                    ธนาคาร<span className="text-red-500">*</span>
                  </p>
                  <select
                    value={bank}
                    className="col-span-3 max-w-32 text-sm py-1"
                    onChange={handleBankChange}
                  >
                    <option>กสิกรไทย</option>
                    <option>ไทยพาณิชย์</option>
                  </select>
                  <p className="text-sm col-span-1">
                    เลขบัญชี<span className="text-red-500">*</span>
                  </p>
                  <Input
                    name="account-num"
                    pattern="\d{10}"
                    value={account}
                    onChange={handleAccountChange}
                    maxLength={10}
                    type="text"
                    className="col-span-3 bg-gray-100 px-2 py-1 rounded-md text-sm w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-medium">พร้อมเพย์</h2>
                <div className="bg-white w-96 h-fit grid grid-cols-4 gap-5 p-4 items-center">
                  <p className="text-sm max-w-16">
                    QR Code<span className="text-red-500">*</span>
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    className="col-span-3 w-full text-xs"
                    onChange={handleImageChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Button
                  type="submit"
                  className="bg-emerald-500 text-white rounded-md w-28 px-3 py-1 text-sm"
                >
                  ยืนยัน
                </Button>
              </div>
            </div>
          </form>

          <Image
            src="image/MobilePayment.svg"
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default SellerPaymentPage;
