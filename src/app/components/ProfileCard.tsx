
interface ProfileCardsProps {
  Username: String;
  UserType: String;
  ImageSrc: string;
}

function ProfileCard({Username, UserType, ImageSrc}:ProfileCardsProps){
  return (
    
    <div className=" flex items-end px-6 py-4 ">
      <div className="text-right px-2">
        <div className="font-normal text-black text-xl">{Username}</div>
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