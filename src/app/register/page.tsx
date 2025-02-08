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
    <div className="mx-auto flex flex-col items-center min-h-screen bg-[#F6F7F9] bg-auto">
      
      {/* Container for Heading + First Form */}
      <div className="max-w-5xl w-full p-8 flex justify-between space-x-8">
        
        <div className="w-1/2">
          {/* Heading aligned directly above the first form */}
          <h1 className="text-left font-semibold text-black text-3xl mb-4">
            สร้างบัญชีใหม่
          </h1>

          {/* First Form: Personal Information */}
          <div className="p-4">
            <RegistrationForm />
          </div>
        </div>

        {/* Second form on the right */}
        <div className="w-1/2 p-4 mt-14">
          <div className="mb-16">
            <RegistrationForm2 />
          </div>
          <AgreementForm />
        </div>
      </div>
    </div>
  );
}
