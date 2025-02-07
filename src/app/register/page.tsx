"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegistrationForm from "@/components/registrationForm";
import RegistrationForm2 from "@/components/registrationForm2";
import AgreementForm from "@/components/AgreementForm";

export default function Register() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  return (
    
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      
          <h1 className="flex place-content-evenly">
        <div className="w-[300px] h-[80px] font-semibold text-black text-3xl px-6 py-16">
        สร้างบัญชีใหม่
        </div>
      </h1>

      <div className="max-w-5xl w-full  p-8  flex justify-between">
        
     
        
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">ข้อมูลส่วนบุคคล</h2>
          <RegistrationForm/>
        </div>

   
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">ข้อมูลทั่วไป</h2>
          <RegistrationForm2/>
          <AgreementForm/>
        </div>
      </div>
    </div>
  );
}
