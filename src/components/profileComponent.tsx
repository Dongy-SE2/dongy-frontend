"use client";

import { useState } from "react";
import ProfileImageUploader from "@/components/ProfileImageUploader";
import MovebackButton from "@/components/MovebackButton";
import RegistrationForm from "@/components/registrationForm";
import { Button } from "@/components/ui/button";
import updateProfile from "@/app/api/profile/updateProfile";
import { User } from "@/app/api/profile/getProfile";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { Waveform } from "ldrs/react";
import 'ldrs/react/Waveform.css'

interface ProfileProps {
  profile: User;
  token: string;
}

export default function ProfileClient({ profile, token }: ProfileProps) {
  const router = useRouter();
  const [profilePic, setProfilePic] = useState<string | null>(
    profile.pictureUrl || null,
  );


  return (

    <div className="min-h-screen w-full flex justify-evenly bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100%">
      <div className="p-6 max-w-4xl mx-auto mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold mb-4">แก้ไขข้อมูล</h2>
          <MovebackButton href="/user" />
        </div>
        <form
          className="grid grid-cols-2 gap-6"
          action={async (e) => {
            const res = await updateProfile(e, profile.documentId, token);
            if (res === 200 || res === 201) {
              alert("แก้ไขข้อมูลสำเร็จ");
              router.refresh();
            }
          }}
        >
          <div>
            <RegistrationForm profile={profile} />
          </div>
          <div className="space-x-8">
            <div className="mb-6">
              <ProfileImageUploader
                profilePic={profilePic}
                setProfilePic={setProfilePic}
              />
            </div>

          


            {/* <RegistrationForm2 profile={profile} /> */}
             <div className="flex justify-start mt-4">
              <Button
                type="submit"
                className="bg-emerald-500 text-white py-2 rounded-lg mt-4 w-36"
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
