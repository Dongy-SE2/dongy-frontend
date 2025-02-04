"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AgreementForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <CardContent>
        {/* Checkbox Agreement */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mt-1 w-5 h-5 cursor-pointer"
          />
          <label className="text-gray-700">
            ข้าพเจ้าได้อ่านและยอมรับ
            <a href="#" className="underline text-black font-medium">
              ข้อตกลงการใช้งานและนโยบายความเป็นส่วนบุคคล
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full bg-green-500 text-white py-2 rounded-lg mt-4"
          disabled={!isChecked}
        >
          สมัครใช้งาน
        </Button>
      </CardContent>
    </Card>
  );
}
