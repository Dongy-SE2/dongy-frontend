"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SellerHomePage from "@/components/userSellerPage";
import BuyerHomePage from "@/components/userBuyerPage";
import { get } from "http";
import getProfile from "../api/profile/getProfile";

export default async function User() {
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");

  const isSeller = session.user.role === "seller";

  if (isSeller) {
    const data = await getProfile(session.user.jwt);
    if (!data.account_number || !data.bank) {
      redirect("/sellerpayment");
    }
  }
  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
      {isSeller ? <SellerHomePage /> : <BuyerHomePage />}
    </div>
  );
}
