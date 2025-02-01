import React from "react";

interface ProfileCardProps {
  UserName: String;
  UserType: String;
  ImageSrc: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ UserName: UserName, UserType: UserType, ImageSrc }) => {
  
  return (
    
    <div className=" flex items-end px-6 py-4 ">
      <div className="text-right px-2">
        <div className="font-normal text-black text-xl">{UserName}</div>
        <div className="font-normal text-[#A9A9A9] text-sm">{UserType}</div>
      </div>
      <img
          src = {ImageSrc}
          alt="Profile Picture"
          className="w-[73px] h-[73px] rounded-full "
      />
    </div>
  );
};

export default ProfileCard;