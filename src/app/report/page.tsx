import { auth } from "@/auth";
import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import { ReportType } from "@/lib/report";
import { redirect } from "next/navigation";
import Report from "@/components/report/Report";

export default async function ReportPage({
  searchParams,
}: {
  searchParams: { type?: string; id?: string };
}) {
  const { id } = await searchParams;
  const type = ReportType[(await searchParams).type ?? "general"];
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
      <ProductWraper>
        <ProductManageHeader name="แจ้งรายงาน" back />
        <Report id={id} type={type} token={session.user.jwt} />
      </ProductWraper>
    </div>
  );
}
