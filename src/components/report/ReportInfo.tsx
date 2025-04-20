import { ReportType } from "@/lib/report";
import ReportMap from "./ReportTypeButton";

interface Props {
  type: ReportType;
  id?: string;
}

export default function ReportInfo({ type, id }: Props): React.ReactNode {
  return (
    <>
      <div className="flex flex-row gap-4 items-center align-middle">
        <h2 className="font-medium text-xl">ประเภทรายงาน</h2>
        {ReportMap[type]}
      </div>
      {type !== ReportType.general && (
        <p className="text-sm mt-2 mb-[-0.75rem]">
          <span className="font-medium">
            {type === ReportType.user ? "User ID" : "Order ID"}
          </span>
          : {id ?? "ไม่ได้ระบุ กรุณาลองอีกครั้ง"}
        </p>
      )}
    </>
  );
}
