"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import RegistrationForm from "@/components/registrationForm";
import RegistrationForm2 from "@/components/registrationForm2";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Register() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  interface FormRef {
    submitForm: () => Promise<void>;
  }
  
  const personalFormRef = useRef<FormRef>(null);
  const accountFormRef = useRef<FormRef>(null);
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (personalFormRef.current && accountFormRef.current) {
      await Promise.all([
        personalFormRef.current.submitForm(),
        accountFormRef.current.submitForm(),
      ]);
    }
    router.push("/login");
  };
  
  const handlePersonalSubmit = (data: any) => {
    console.log("Personal Information:", data);
  };
  
  const handleAccountSubmit = (data: any) => {
    console.log("Account Information:", data);
  };

  return (
    <div className="mx-auto flex flex-col items-center min-h-screen bg-[#F6F7F9] bg-auto">
      <form className="max-w-5xl w-full p-8 flex justify-between space-x-8" onSubmit={handleFormSubmit}>
        <div className="w-1/2">
          <h1 className="text-left font-semibold text-black text-3xl mb-4">
            สร้างบัญชีใหม่
          </h1>
          <div className="p-4">
            <RegistrationForm ref={personalFormRef} onSubmit={handlePersonalSubmit} />
          </div>
        </div>

        <div className="w-1/2 p-4 mt-14">
          <div className="mb-16">
            <RegistrationForm2 ref={accountFormRef} onSubmit={handleAccountSubmit} />
          </div>

          <Card className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-lg">
            <CardContent>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 w-5 h-5 cursor-pointer"
                  required
                />
                <label className="text-gray-700">
                  ข้าพเจ้าได้อ่านและยอมรับ
                  <a href="#" className="underline text-black font-medium">
                    ข้อตกลงการใช้งานและนโยบายความเป็นส่วนบุคคล
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#10B981] text-white py-2 rounded-lg mt-4"
                disabled={!isChecked}
              >
                สมัครใช้งาน
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
