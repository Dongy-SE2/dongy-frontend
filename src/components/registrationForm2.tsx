"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";

const RegistrationForm2 = ({ profile }: { profile?: any }) => {
  const [role, setRole] = useState<"buyer" | "seller">(
    profile?.rolename || "buyer",
  );
  const location = usePathname();
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">ข้อมูลทั่วไป</h2>

      <Card
        className={`${location.includes("/profile") ? "h-[21rem]" : ""} max-w-md mx-auto px-4 py-2 bg-white rounded-2xl border border-gray-200 overflow-hidden`}
      >
        <CardContent>
          <input type="hidden" value={role} name="role" />
          <div className="grid grid-cols-3 gap-5 items-center">
            {!location.includes("/profile") ? (
              <>
                <label className="block text-gray-700 max-w-16 text-sm">
                  คุณคือ <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  className={`flex-1 py-2 rounded-lg border w-28 h-8 text-sm ${
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
                  className={`flex-1 py-2 rounded-lg border w-28 h-8 text-sm ${
                    role === "seller"
                      ? "bg-gray-800 text-white border-gray-800"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setRole("seller")}
                >
                  ผู้ขาย
                </button>
              </>
            ) : (
              <>
                <label className="block text-gray-700 whitespace-nowrap text-sm">
                  คุณคือ
                </label>
                <button className="flex-1 py-2 rounded-lg border w-28 h-8 text-sm bg-gray-800 text-white border-gray-800">
                  {role === "buyer" ? "ผู้ซื้อ" : "ผู้ขาย"}
                </button>
                <div />
              </>
            )}

            {location.includes("/profile") ? (
              <></>
            ) : (
              <>
                <label className="block text-gray-700 whitespace-nowrap text-sm">
                  ชื่อบัญชีผู้ใช้<span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="username"
                  defaultValue={profile?.username || ""}
                  className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64 col-span-2"
                  required
                />
              </>
            )}

            {/* ✅ Email Field */}
            <label className="block text-gray-700 whitespace-nowrap text-sm">
              อีเมล<span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              defaultValue={profile?.email || ""}
              className="block bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64 col-span-2"
              required
            />

            {/* ✅ Password Fields */}
            <label className="block text-gray-700 whitespace-nowrap text-sm">
              รหัสผ่าน{" "}
              {!location.includes("/profile") ? (
                <span className="text-red-500">*</span>
              ) : (
                <></>
              )}
            </label>
            <Input
              type="password"
              name="password"
              defaultValue={""}
              className="block bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64 col-span-2"
              required={!location.includes("/profile")}
            />
            <label className="block text-gray-700 whitespace-nowrap text-sm">
              ยืนยันรหัสผ่าน
              {!location.includes("/profile") ? (
                <span className="text-red-500">*</span>
              ) : (
                <></>
              )}
            </label>
            <Input
              type="password"
              name="confirmPassword"
              defaultValue={""}
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64 col-span-2"
              required={!location.includes("/profile")}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm2;
