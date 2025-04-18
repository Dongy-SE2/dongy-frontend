"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Define TypeScript Interface
interface ProfileData {
  title: string;
  firstname: string;
  lastname: string;
  dob: string;
  phone: string;
  SSN: string;
  location: string;
}

const RegistrationForm = ({ profile }: { profile?: ProfileData }) => {
  console.log(profile);
  const formatDateForInput = (isoDate: string | null) => {
    if (!isoDate) return ""; // Handle null or undefined values
    return isoDate;
  };

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">ข้อมูลส่วนบุคคล</h2>

      <Card className="max-w-lg mx-auto px-4 py-2 rounded-2xl bg-opacity-70 border border-gray-200">
        <CardContent>
          <div className="grid grid-cols-5 gap-7 items-center">
            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              คำนำหน้า<span className="text-red-500">*</span>
            </label>
            <select
              className="block bg-gray-100 py-2 text-sm max-w-28 border rounded-lg col-span-2"
              name="title"
              defaultValue={profile?.title || ""}
            >
              <option value="" disabled>
                -- Select --
              </option>
              <option value="Mr.">นาย</option>
              <option value="Mrs.">นาง</option>
              <option value="Ms.">นางสาว</option>
            </select>
            <div className="col-span-2" />

            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              ชื่อ<span className="text-red-500">*</span>
            </label>
            <Input
              name="firstname"
              type="text"
              defaultValue={profile?.firstname || ""}
              className="col-span-4 text-sm"
              placeholder="ชื่อ"
              required
            />

            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              สกุล<span className="text-red-500">*</span>
            </label>
            <Input
              name="lastname"
              type="text"
              defaultValue={profile?.lastname || ""}
              className="col-span-4 text-sm"
              placeholder="สกุล"

              required
            />

            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              วันเกิด<span className="text-red-500">*</span>
            </label>
            <Input
              name="dob"
              type="date"
              defaultValue={formatDateForInput(profile?.dob || "")}
              className="col-span-4 text-sm"
              required
            />

            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm col-span-2">
              เบอร์โทรศัพท์<span className="text-red-500">*</span>
            </label>
            <Input
              name="phone"
              type="tel"
              defaultValue={profile?.phone || ""}
              className="col-span-3 text-sm"
              placeholder="เบอร์โทรศัพท์"

              required
            />

            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm col-span-2">
              เลขบัตรประชาชน
              <span className="text-red-500">*</span>
            </label>
            <Input
              name="SSN"
              type="text"
              defaultValue={profile?.SSN || ""}
              className="col-span-3 text-sm"
              placeholder="เลขบัตรประจำตัวประชาชน"
              required
            />

            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm col-span-1">
              ที่อยู่<span className="text-red-500">*</span>
            </label>
            <textarea
              name="location"
              defaultValue={profile?.location || ""}
              className="block bg-white px-4 py-2 w-50 h-24 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-4 text-sm"
              placeholder="ที่อยู่"
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
