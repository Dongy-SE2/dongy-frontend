"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

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

const RegistrationForm = ({ profile }: { profile: ProfileData }) => {
  const [formData, setFormData] = useState<ProfileData>({
    ...profile, // ✅ Merge with profile data
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...profile }));
  }, [profile]);

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">ข้อมูลส่วนบุคคล</h2>

      <Card className="max-w-lg mx-auto px-4 py-2 rounded-2xl bg-opacity-70 border border-gray-200">
        <CardContent>
          <div className="grid grid-cols-5 gap-7 items-center">
            {/* Title Selection */}
            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              คำนำหน้า<span className="text-red-500">*</span>
            </label>
            <select
              className="block bg-gray-100 px-4 py-2 text-sm max-w-28 border rounded-lg col-span-2"
              name="title"
              value={formData.title || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
            >
              <option value="">-- Select --</option>
              <option>นาย</option>
              <option>นาง</option>
              <option>นางสาว</option>
            </select>
            <div className="col-span-2" />

            {/* First Name */}
            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              ชื่อ<span className="text-red-500">*</span>
            </label>
            <Input
              name="firstname"
              type="text"
              value={formData.firstname || ""}
              className="col-span-4"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  firstname: e.target.value,
                }))
              }
              required
            />

            {/* Last Name */}
            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              สกุล<span className="text-red-500">*</span>
            </label>
            <Input
              name="lastname"
              type="text"
              value={formData.lastname || ""}
              className="col-span-4"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  lastname: e.target.value,
                }))
              }
              required
            />

            {/* Date of Birth */}
            <label className="block text-gray-700 whitespace-nowrap text-sm col-span-1">
              วันเกิด<span className="text-red-500">*</span>
            </label>
            <Input
              name="dob"
              type="date"
              value={formData.dob ? formData.dob.slice(0, 10) : ""}
              className="col-span-4"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, dob: e.target.value }))
              }
              required
            />

            {/* Phone Number */}
            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm col-span-2">
              เบอร์โทรศัพท์<span className="text-red-500">*</span>
            </label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone || ""}
              className="col-span-3"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              required
            />

            {/* SSN */}
            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm col-span-2">
              เลขบัตรประชาชน
              <span className="text-red-500">*</span>
            </label>
            <Input
              name="SSN"
              type="text"
              value={formData.SSN || ""}
              className="col-span-3"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, SSN: e.target.value }))
              }
              required
            />

            {/* Address */}
            <label className="block text-gray-700 mb-1 whitespace-nowrap text-sm col-span-1">
              ที่อยู่<span className="text-red-500">*</span>
            </label>
            <textarea
              name="location"
              value={formData.location || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              className="block bg-gray-100 px-4 py-1 text-sm w-50 h-24 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-4"
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
