"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import ActionButton from "./ActionButton";

export default function LoginForm() {
  const [role, setRole] = useState<"buyer" | "seller">("seller");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <CardContent>
        <div className="mb-4 flex items-center gap-8">
          <p className="text-lg font-medium mb-2 c">คุณคือ</p>
          <div className="flex gap-4">
            <button
              className={cn(
                "flex-1 py-2 rounded-lg border w-32 h-14",
                role === "buyer"
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white border-gray-300"
              )}
              onClick={() => setRole("buyer")}
            >
              ผู้ซื้อ
            </button>
            <button
              className={cn(
                "flex-1 py-2 rounded-lg border w-32 h-14",
                role === "seller"
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white border-gray-300"
              )}
              onClick={() => setRole("seller")}
            >
              ผู้ขาย
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-11">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">อีเมล</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="mb-6 flex items-center gap-6" >
          <label className="block text-gray-700 mb-1 whitespace-nowrap">รหัสผ่าน</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <Button className="w-full bg-green-500 text-white py-2 rounded-lg">
          เข้าสู่ระบบ
        </Button>
      </CardContent>
    </Card>
  );
}
