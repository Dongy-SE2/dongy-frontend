"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SellerHomePage from "@/components/userSellerPage";
import BuyerHomePage from "@/components/userBuyerPage";

export default async function User() {
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");

  const isSeller = session.user.role === "seller";

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-16">
      {isSeller ? <SellerHomePage /> : <BuyerHomePage />}
    </div>
  );
}
