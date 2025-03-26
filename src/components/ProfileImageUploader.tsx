"use client";
import { Trash2Icon, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ProfileImageUploader: React.FC<{
  profilePic: string | null;
  setProfilePic: (url: string | null) => void;
}> = ({ profilePic, setProfilePic }) => {
  const uploadRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <h2 className="font-semibold text-xl ml-6">รูปโปรไฟล์</h2>
      <div className="flex items-center p-4">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mr-4">
          {profilePic ? (
            <Image
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border"
              height={200}
              width={200}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <div>
          <button
            type="button"
            className="block rounded-full bg-white p-2.5 my-2"
            onClick={() => uploadRef.current?.click()}
          >
            <UploadIcon width={18} height={18} />
          </button>
          <button
            type="button"
            className="block rounded-full bg-white p-2.5"
            onClick={() => {
              setProfilePic(null);
              if (uploadRef && uploadRef.current) {
                uploadRef.current.files = null;
              }
            }}
          >
            <Trash2Icon width={18} height={18} />
          </button>
        </div>
        <input
          name="image"
          type="file"
          accept="image/*"
          hidden
          ref={uploadRef}
          onChange={(e) => {
            if (!e.currentTarget.files) return;
            const fileReader = new FileReader();
            const image = e.currentTarget.files[0];
            fileReader.readAsDataURL(image);
            fileReader.onloadend = (res) => {
              if (
                res.target &&
                res.target.result &&
                typeof res.target.result === "string"
              ) {
                setProfilePic(res.target.result);
              }
            };
          }}
        />
      </div>
    </div>
  );
};

export default ProfileImageUploader;
