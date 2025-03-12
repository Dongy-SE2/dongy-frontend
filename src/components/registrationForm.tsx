"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationForm = () => {
  // const isValidDate = (date: string) => !date.includes("30 กุมภาพันธ์");

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-5">ข้อมูลส่วนบุคคล</h2>
      <Card className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <CardContent>
          <div className="mb-4 flex items-center gap-3">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              คำนำหน้า <span className="text-red-500">*</span>
            </label>
            <select
              className="block my-3 bg-gray-100 px-4 py-2 text-sm w-26 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="title"
            >
              <option>นาย</option>
              <option>นาง</option>
              <option>นางสาว</option>
            </select>
          </div>

          <div className="mb-4 flex items-center gap-14">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <Input
              name="firstname"
              type="text"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-11">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              สกุล <span className="text-red-500">*</span>
            </label>
            <Input
              name="lastname"
              type="text"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              วันเกิด <span className="text-red-500">*</span>
            </label>
            <Input
              name="dob"
              type="date"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-50"
              required
            />
            {/* {window.location.href.indexOf("error=invalidData") !== -1 && ( */}
            {/*   <p className="text-red-500 text-sm mt-1">วันที่ไม่ถูกต้อง</p> */}
            {/* )} */}
          </div>

          <div className="mb-4 flex items-center gap-6">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              เบอร์โทรศัพท์ <span className="text-red-500">*</span>
            </label>
            <Input
              name="tel"
              type="tel"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-50"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-3">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              เลขบัตรประชาชน/
              <br />
              Passport ID <span className="text-red-500">*</span>
            </label>
            <Input
              name="SSN"
              type="text"
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-50"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-12">
            <label className="block text-gray-700 mb-1 whitespace-nowrap">
              ที่อยู่ <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              className="block my-3 bg-gray-100 px-4 py-2 text-sm w-64 h-24 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
