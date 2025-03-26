"use server";
import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import getProfile from "@/app/api/profile/getProfile";
import Link from "next/link";
import { SearchIcon, SettingsIcon, ShoppingCartIcon } from "lucide-react";
import LogoutButton from "./LogoutButton";

const RoundIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="rounded-full bg-white p-1.5">{children}</div>;
};

interface Props {
  role: string;
  image?: string;
}

const Navigation: React.FC<Props> = ({ image, role }) => {
  return (
    <div className="flex text-center justify-items-center items-center gap-4">
      {role === "seller" ? (
        <></>
      ) : (
        <>
          <RoundIcon>
            <Link href="/product">
              <SearchIcon />
            </Link>
          </RoundIcon>
          <RoundIcon>
            <Link href="/payment">
              <ShoppingCartIcon />
            </Link>
          </RoundIcon>
        </>
      )}
      <RoundIcon>
        <Link href="/user">
          <SettingsIcon width={20} height={20} />
        </Link>
      </RoundIcon>
      <RoundIcon>
        <LogoutButton />
      </RoundIcon>
      <Image
        src={image || "/image/ProfilePicture.jpg"}
        alt="profile"
        height={34}
        width={34}
        className="rounded-full"
      />
    </div>
  );
};

const Navbar = async () => {
  const session = await auth();
  let profilePicture: string | undefined;
  if (session) {
    profilePicture = (await getProfile(session.user.jwt)).pictureUrl;
  }
  return (
    <nav className="bg-[#047857] flex items-center justify-between px-6 py-2">
      <Image
        src="/image/Logo.jpg"
        alt="Placeholder Image"
        width="27"
        height="27"
      />
      {!session ? (
        <></>
      ) : (
        <Navigation role={session.user.role} image={profilePicture} />
      )}
    </nav>
  );
};

export default Navbar;
