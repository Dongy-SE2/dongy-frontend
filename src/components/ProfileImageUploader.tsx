import React, { useState } from "react";
import uploadProfilePicture from "@/app/api/profile/updateProfilePicture";

const ProfileImageUploader: React.FC<{
  profilePic: string | null;
  setProfilePic: (url: string) => void;
  token: string;
}> = ({ profilePic, setProfilePic, token }) => {
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // ✅ Call API to upload the image
      const imageUrl = await uploadProfilePicture(file, token);
      if (!imageUrl) return; // Prevent setting if upload fails

      // ✅ Prevent unnecessary updates
      if (profilePic === imageUrl) return;

      setProfilePic(imageUrl);
    }
  };

  // ✅ Fix: Use `setProfilePic("")` instead of `setImage(null)`
  const handleImageDelete = () => {
    setProfilePic(""); // Reset profile picture
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl ml-6">รูปโปรไฟล์</h2>
      <div className="flex items-center p-4">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mr-4">
          {profilePic ? (
            <img
              src={profilePic || "/default-profile.jpg"} // ✅ Fallback Image
              alt="Profile"
              className="w-full h-full object-cover rounded-full border"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <div className="">
          {/* Upload Button */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-500 text-white p-2 rounded-full shadow"
          >
            อัปโหลด
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          {/* Delete Button */}
          <button
            onClick={handleImageDelete}
            className="bg-red-500 text-white p-2 rounded-full shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageUploader;
