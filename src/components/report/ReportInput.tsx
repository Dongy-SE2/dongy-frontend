export default function ReportInput() {
  return (
    <div className="mt-6 my-4">
      <p className="font-medium text-gray-600">รายละเอียด</p>
      <textarea
        required
        className="bg-gray-100 h-80 w-full resize-none rounded-xl p-5 mt-1"
        name="detail"
      />
    </div>
  );
}
