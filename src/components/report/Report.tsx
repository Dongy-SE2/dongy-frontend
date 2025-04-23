"use client";
import reportHandler from "@/app/api/report/report";
import ReportInfo from "./ReportInfo";
import ReportInput from "./ReportInput";
import ReportSubmit from "./ReportSubmit";
import { ReportType } from "@/lib/report";
import { useRouter } from "next/navigation";

interface ReportProps {
  type: ReportType;
  id?: string;
  token: string;
}

export default function Report({ type, id, token }: ReportProps) {
  const router = useRouter();
  return (
    <form
      className="px-10 py-10 mx-16 mt-6 bg-white rounded-xl shadow-sm"
      action={async (data) => {
        await reportHandler(data, type, token, id);
        alert("รายงานสำเร็จ");
        router.back();
      }}
    >
      <ReportInfo type={type} id={id} />
      <ReportInput />
      <ReportSubmit />
    </form>
  );
}
