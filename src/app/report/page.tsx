import { auth } from "@/auth";
import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import ReportInfo from "@/components/report/ReportInfo";
import ReportInput from "@/components/report/ReportInput";
import ReportSubmit from "@/components/report/ReportSubmit";
import { ReportType } from "@/lib/report";
import { redirect } from "next/navigation";
import { generalReport, userReport, orderReport } from "../api/report/report";

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

  const reportHandler = async (data: FormData) => {
    "use server";
    const res = data.get("detail");
    if (res === null) return;
    const detail = res.toString();
    switch (type) {
      case ReportType.general:
        generalReport(detail, session.user.jwt);
        break;
      case ReportType.user:
        if (!id) {
          break;
        }
        userReport(detail, id, session.user.jwt);
        break;
      case ReportType.order:
        if (!id) {
          break;
        }
        orderReport(detail, id, session.user.jwt);
        break;
    }
    // redirect("/user");
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
      <ProductWraper>
        <ProductManageHeader name="แจ้งรายงาน" back />
        <form
          className="px-10 py-10 mx-16 mt-6 bg-white rounded-xl shadow-sm"
          action={reportHandler}
        >
          <ReportInfo type={type} id={id} />
          <ReportInput />
          <ReportSubmit />
        </form>
      </ProductWraper>
    </div>
  );
}
