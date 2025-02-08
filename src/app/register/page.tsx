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
    
    <div className="flex flex-col items-center min-h-screen bg-[#F6F7F9] bg-auto">
      
      <h1 className="flex place-content-evenly">
        <div className="w-[300px] h-[80px] font-semibold text-black text-3xl px-6 py-4 text-left">
          สร้างบัญชีใหม่
        </div>
      </h1>

      <div className="max-w-5xl w-full  p-8  flex justify-between">
        
     
        
        <div className="w-1/2 p-4">
          
          <RegistrationForm/>
        </div>

   
        <div className="w-1/2 p-4">
          <div className="mb-8"> 
            <RegistrationForm2 />
          </div>
          <AgreementForm />
</div>
      </div>
    </div>
  );
}
