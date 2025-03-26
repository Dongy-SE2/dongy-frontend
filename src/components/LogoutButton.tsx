"use client";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/login", redirect: true })}
      className="m-0 p-0 block"
    >
      <LogOutIcon width={20} height={20} />
    </button>
  );
}
