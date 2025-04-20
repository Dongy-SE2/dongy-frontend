"use client";
import { Button } from "../ui/button";

export default function ReportSubmit(): React.ReactNode {
  return (
    <div className="flex flex-row w-full justify-center">
      <Button
        type="submit"
        className="mt-1 px-14 py-1 rounded-md bg-gray-600 text-white hover:bg-gray-700 duration-200 transition-colors"
      >
        ส่ง
      </Button>
    </div>
  );
}
