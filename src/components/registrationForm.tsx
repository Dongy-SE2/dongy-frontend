"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationForm = () => {
  // const isValidDate = (date: string) => !date.includes("30 กุมภาพันธ์");

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">ข้อมูลส่วนบุคคล</h2>

      <Card className="max-w-lg mx-auto px-4 py-2 rounded-2xl bg-opacity-70 border border-gray-200">
        <CardContent>
          <div className="grid grid-cols-3 gap-7 items-center">

              <label className="block text-gray-700 whitespace-nowrap text-sm">
                คำนำหน้า<span className="text-red-500">*</span>
              </label>

              <select
                className="block bg-gray-100 px-4 py-2 text-sm max-w-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
                name="title"
              >
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </select>

            <label className="block text-gray-700 whitespace-nowrap text-sm">
              ชื่อ<span className="text-red-500">*</span>
            </label>
            <Input
              name="firstname"
              type="text"
              className="block bg-gray-100 px-4 py-1 rounded-[8px] text-sm w-64 col-span-2"
              required
            />
            <label className="block text-gray-700 whitespace-nowrap text-sm">
              สกุล<span className="text-red-500">*</span>
            </label>
            <Input
              name="lastname"
              type="text"
              className="block bg-gray-100 px-4 py-1 rounded-[8px] text-sm w-64 col-span-2"
              required
            />

            <label className="block text-gray-700 whitespace-nowrap text-sm">
              วันเกิด<span className="text-red-500">*</span>
            </label>
            <Input
              name="dob"
              type="date"
              className="block bg-gray-100 px-4 py-0 rounded-[8px] text-sm w-50 col-span-2"
              required
            />
            {/* {window.location.href.indexOf("error=invalidData") !== -1 && ( */}
            {/*   <p className="text-red-500 text-sm mt-1">วันที่ไม่ถูกต้อง</p> */}
            {/* )} */}

            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm">
              เบอร์โทรศัพท์<span className="text-red-500">*</span>
            </label>
            <Input
              name="tel"
              type="tel"
              className="block bg-gray-100 px-4 py-1 rounded-[8px] text-sm w-50 col-span-2"
              required
            />

            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm">
              เลขบัตรประชาชน/
              <br />
              Passport ID<span className="text-red-500">*</span>
            </label>
            <Input
              name="SSN"
              type="text"
              className="block bg-gray-100 px-4 py-1 rounded-[8px] text-sm w-50 col-span-2"
              required
            />

            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm">
              ที่อยู่<span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              className="block bg-gray-100 px-4 py-1 text-sm w-50 h-24 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
              required
            />




          </div>
          

          

          
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
