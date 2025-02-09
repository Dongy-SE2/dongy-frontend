"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { getUserInfo } from "@/app/api/user/getUserInfo";

interface RegistrationForm2Props {
  isEdit?: boolean;
  userId?: string;  
}

export default function RegistrationForm2({ isEdit = false, userId }: RegistrationForm2Props) {
  const [role, setRole] = useState<"buyer" | "seller">("seller");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {
    if (isEdit && userId !== undefined) {
      const fetchUserData = async () => {
        try {
          const userInfo = await getUserInfo(userId);  
          setRole(userInfo.role as "buyer" | "seller");
          setEmail(userInfo.email);
          setPassword(userInfo.password);
          setConfirmPassword(userInfo.confirmPassword);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
      fetchUserData();
    }
  }, [isEdit, userId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit) {
      console.log("Updating user data:", { role, email, password, confirmPassword });
    } else {
      console.log("Registering new user:", { role, email, password, confirmPassword });
    }
  };

  return (
    <div className="bg-[#F6F7F9]">
      <h2 className="font-semibold text-2xl mb-5">{isEdit ? "แก้ไขข้อมูลทั่วไป" : "ข้อมูลทั่วไป"}</h2>

      <Card className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardContent>
          <form onSubmit={handleSubmit}>

            <div className="">
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
                อีเมล <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                  required
                />
                {/* {password.length >= 6 && <span className="absolute right-3 top-4 text-green-500">✔️</span>} */}
              
            </div>

       
            <div className="ml-20 ">
              
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                  required
                />
                {/* {password === confirmPassword && <span className="absolute right-3 top-4 text-green-500">✔️</span>} */}
              
            </div>
            </div>
            

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
