import React from "react";
import Image from "next/image";
// import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <nav className="bg-[#047857] flex items-center justify-between px-6 py-2">
      <Image
        src="/image/Logo.jpg"
        alt="Placeholder Image"
        width="27"
        height="8"
      />

      <div className="flex gap-4">
        {["/page1", "/page2", "/page3", "/page4"].map((path, index) => (
          <button
            key={index}
            // onClick={() => navigate(path)}
            className="w-[33px] h-[33px] bg-white rounded-full hover:bg-gray-200 transition flex items-center justify-center border-2 border-gray"
          >
            {index === 3 ? (
              <Image
                src="/image/ProfilePicture.jpg"
                alt="Circle 4"
                width="33"
                height="33"
                className="rounded-full"
              />
            ) : null}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

