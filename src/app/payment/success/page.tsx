import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="bg-white shadow-lg text-center p-10">
      <div className="flex justify-center w-full">
        <CheckCircle2Icon
          className="bg-green-500 text-white rounded-full block"
          width={"6rem"}
          height={"6rem"}
        />
      </div>
      <h1 className="my-10 font-bold text-medium text-2xl">
        การชำระเงินเสร็จสมบูรณ์
      </h1>
      <Link href="/" className="py-2 px-10 bg-gray-700 text-white rounded-lg">
        กลับหน้าหลัก
      </Link>
    </div>
  );
}
