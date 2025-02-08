"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectItem } from "@/components/ui/select";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { CalendarIcon, UploadIcon, TrashIcon } from "lucide-react";
import RegistrationForm from "@/components/registrationForm";
import RegistrationForm2 from "@/components/registrationForm2";
import { useRouter } from "next/navigation";
import ProfileImageUploader from "@/components/ProfileImageUploader";

export default function ProfilePage() {
  const [profilePic, setProfilePic] = useState<string>("/placeholder-profile.jpg");
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] bg-auto">
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">แก้ไขข้อมูล</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className=" ">
            <RegistrationForm/>
        </div>
        
        {/* Profile Section */}
        <div className="space-x-8">
          <div className="mb-3">
              <ProfileImageUploader/>
          </div>
          <div>

              <RegistrationForm2/>
          </div>
          <div className="flex justify-end mt-4">
        <Button  className="bg-green-500 text-white py-2 rounded-lg mt-4 w-36" onClick={() => router.push("/user")}>บันทึก</Button>
      </div>
        </div>
      
      
      </div>
    </div>
    </div>
  );
}
