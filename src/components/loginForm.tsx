"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import ActionButton from "./ActionButton";
import { useRouter } from "next/navigation";
import { FormEvent } from 'react'
import Login from "@/app/login/page";

export default function LoginForm() {
  const [role, setRole] = useState<"buyer" | "seller">("seller");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");




  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (response.ok) {
      setErrorMessage("");  
      router.push('/user');
    } else {
      const errorData = await response.json();  
      setErrorMessage(errorData.error || "An unexpected error occurred.");
    }
  }
  

  return (
    <Card className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg w-full sm:w-auto ">
      <CardContent>
        <form onSubmit={handleSubmit}> 
          <div className="mb-4 flex items-center gap-8">
            <p className="text-lg font-medium whitespace-nowrap mb-2">คุณคือ</p>
          <div className="flex gap-4">
          <button
            type="button"
            className={cn(
              "flex-1 py-2 rounded-lg border w-28 h-14",
              role === "buyer"
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white border-gray-300"
            )}
            onClick={() => setRole("buyer")}
          >
            ผู้ซื้อ
          </button>
          <button
            type="button"
            className={cn(
              "flex-1 py-2 rounded-lg border w-28 h-14",
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
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-60"
        />
      </div>

      <div className="mb-6 flex items-center gap-6">
        <label className="block text-gray-700 mb-1 whitespace-nowrap">รหัสผ่าน</label>
        <Input
          type="password"
          name="password"  
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-60"
        />
      </div>

      {errorMessage && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}

      <Button
        type="submit"  
        className="w-full bg-[#10B981] text-white py-2 rounded-lg"
      >
        เข้าสู่ระบบ
      </Button>
    </form>
  </CardContent>
</Card>

  );
}
