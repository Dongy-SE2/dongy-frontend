"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationForm2 = () => {
  const [role, setRole] = useState<"buyer" | "seller">("buyer");

  return (
    <div className="bg-[#F6F7F9]">
      <h2 className="font-semibold text-2xl mb-5">ข้อมูลทั่วไป</h2>

      <Card className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardContent>
          <input type="hidden" value={role} name="role" />
          <div className="mb-4 flex items-center gap-6">
            <label className="block text-gray-700 font-medium mb-2">
              คุณคือ <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className={`flex-1 py-2 rounded-lg border w-40 h-14 ${
                  role === "buyer"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => setRole("buyer")}
              >
                ผู้ซื้อ
              </button>
              <button
                type="button"
                className={`flex-1 py-2 rounded-lg border ${
                  role === "seller"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => setRole("seller")}
              >
                ผู้ขาย
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-8">
            <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
              ชื่อบัญชีผู้ใช้ <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="username"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
            <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-3">
            <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
              รหัสผ่าน <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              name="pwd"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>

          <div className="ml-20">
            <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
              กรอกรหัสผ่านอีกครั้ง <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              name="conPwd"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm2;
