import { ReportType } from "@/lib/report";

const ReportTypeButton: React.FC<{
  name: string;
  color: string;
  textColor: string;
}> = ({ name, color, textColor }) => {
  return (
    <p className={`${color} ${textColor} text-sm rounded-md px-6 py-0.5`}>
      {name}
    </p>
  );
};

const ReportMap: Record<ReportType, React.ReactNode> = {
  [ReportType.general]: (
    <ReportTypeButton
      name="ทั่วไป"
      color="bg-green-200"
      textColor="text-gray-600"
    />
  ),
  [ReportType.user]: (
    <ReportTypeButton
      name="ผู้ใช้"
      color="bg-yellow-200"
      textColor="text-gray-600"
    />
  ),
  [ReportType.order]: (
    <ReportTypeButton
      name="การสั่งซื้อ"
      color="bg-cyan-200"
      textColor="text-gray-600"
    />
  ),
};

export default ReportMap;
