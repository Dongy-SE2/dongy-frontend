"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import RegistrationForm from "@/components/registrationForm";
import RegistrationForm2 from "@/components/registrationForm2";
import ProfileImageUploader from "@/components/ProfileImageUploader";

export default function ProfilePage() {
  const [profilePic, setProfilePic] = useState<string>(
    "/placeholder-profile.jpg"
  );
  const router = useRouter();

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

    router.push("/user");
  };

  const handlePersonalSubmit = (data: any) => {
    console.log("Personal Information:", data);
  };

  const handleAccountSubmit = (data: any) => {
    console.log("Account Information:", data);
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] bg-auto">
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">แก้ไขข้อมูล</h2>
        <form className="grid grid-cols-2 gap-6" onSubmit={handleFormSubmit}>
          <div>
            <RegistrationForm />
          </div>

          <div className="space-x-8">
            <div className="mb-6">
              <ProfileImageUploader />
            </div>

            <div>
              <RegistrationForm2 />
            </div>

            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="bg-[#10B981] text-white py-2 rounded-lg mt-4 w-36"
              >
                บันทึก
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
