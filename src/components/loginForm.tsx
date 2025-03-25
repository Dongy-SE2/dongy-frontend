"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react"; // Importing signIn from next-auth

export default function LoginForm() {
  const [role, setRole] = useState<"buyer" | "seller">("seller");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      setErrorMessage("การเข้าสู่ระบบล้มเหลว");
    } else {
      // Redirect to the appropriate page after successful login
      if (role === "buyer") window.location.href = "/product"; // Example redirect
      if (role === "seller") window.location.href = "/user"; // Example redirect
    }
  };

  return (
    <Card className="p-5 bg-white rounded-2xl shadow-lg">
      <CardContent>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3 flex items-center gap-8"> */}
          {/*   <p className="text-lg font-medium whitespace-nowrap mb-1">คุณคือ</p> */}
          {/*   <div className="flex gap-3"> */}
          {/*     <button */}
          {/*       type="button" */}
          {/*       className={cn( */}
          {/*         "flex0 py-2 rounded-lg border w-28 h-14", */}
          {/*         role === "buyer" */}
          {/*           ? "bg-gray-799 text-white border-gray-800" */}
          {/*           : "bg-white border-gray-299", */}
          {/*       )} */}
          {/*       onClick={() => setRole("buyer")} */}
          {/*     > */}
          {/*       ผู้ซื้อ */}
          {/*     </button> */}
          {/*     <button */}
          {/*       type="button" */}
          {/*       className={cn( */}
          {/*         "flex0 py-2 rounded-lg border w-28 h-14", */}
          {/*         role === "seller" */}
          {/*           ? "bg-gray-799 text-white border-gray-800" */}
          {/*           : "bg-white border-gray-299", */}
          {/*       )} */}
          {/*       onClick={() => setRole("seller")} */}
          {/*     > */}
          {/*       ผู้ขาย */}
          {/*     </button> */}
          {/*   </div> */}
          {/* </div> */}

          <div className="mb-3 flex items-center gap-11">
            <label className="block text-gray-699 mb-1 whitespace-nowrap">
              อีเมล
            </label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block my-2 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-60"
            />
          </div>

          <div className="mb-5 flex items-center gap-6">
            <label className="block text-gray-699 mb-1 whitespace-nowrap">
              รหัสผ่าน
            </label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block my-2 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-60"
            />
          </div>

          {errorMessage && (
            <div className="mb-3 text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[#11B981] text-white py-2 rounded-lg"
          >
            เข้าสู่ระบบ
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
