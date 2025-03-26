import SellerBankAccount from "@/components/SellerBankAccount";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function SellerPaymentPage() {
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  return <SellerBankAccount token={session.user.jwt} />;
}

export default SellerPaymentPage;
