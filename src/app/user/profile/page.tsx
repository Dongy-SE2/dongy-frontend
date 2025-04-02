// 📌 This is now a Server Component
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileClient from "@/components/profileComponent";
import getProfile from "@/app/api/profile/getProfile";

export default async function ProfilePage() {
  const session = await auth(); // ✅ Run on the server
  if (!session || !session.user.jwt) redirect("/login");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const profile = await getProfile(session.user.jwt); // Fetch user profile on the server

  return <ProfileClient profile={profile || null} token={session.user.jwt} />;
}
