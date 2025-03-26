"use client";

import { useState } from "react";
import ProfileImageUploader from "@/components/ProfileImageUploader";
import MovebackButton from "@/components/MovebackButton";
import RegistrationForm from "@/components/registrationForm";
import RegistrationForm2 from "@/components/registrationForm2";
import { Button } from "@/components/ui/button";
import updateProfile from "@/app/api/profile/updateProfile";
import { User } from "@/app/api/profile/getProfile";

interface ProfileProps {
  profile: User;
  token: string;
}

export default function ProfileClient({ profile, token }: ProfileProps) {
  const [profilePic, setProfilePic] = useState<string | undefined>(
    profile.pictureUrl,
  );

  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] bg-auto">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold mb-4">แก้ไขข้อมูล</h2>
          <MovebackButton href="/user" />
        </div>
        <form
          className="grid grid-cols-2 gap-6"
          action={(e) => {
            updateProfile(e, profile.documentId, token);
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
            <RegistrationForm2 profile={profile} />
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
