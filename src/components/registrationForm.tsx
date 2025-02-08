"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function RegistrationForm() {
  const [title, setTitle] = useState("นาย");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [address, setAddress] = useState("");

  // Check if the date of birth is valid
  const isValidDate = (date: string) => !date.includes("30 กุมภาพันธ์");

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-5">ข้อมูลส่วนบุคคล</h2>
    <Card className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <CardContent>
        
        <div className="mb-4 flex items-center gap-3">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">คำนำหน้า <span className="text-red-500">*</span></label>
          <select
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-24"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </select>
        </div>

        <div className="mb-4 flex items-center gap-14">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">ชื่อ <span className="text-red-500">*</span></label>
          <Input type="text" className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="mb-4 flex items-center gap-11">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">สกุล <span className="text-red-500">*</span></label>
          <Input type="text" className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">วันเกิด <span className="text-red-500">*</span></label>
          <div className="relative">
            <Input type="text" className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-60" value={dob} onChange={(e) => setDob(e.target.value)} />
            <span className="absolute right-3 top-5 text-gray-500">📅</span>
          </div>
          {!isValidDate(dob) && <p className="text-red-500 text-sm mt-1">วันที่ไม่ถูกต้อง</p>}
        </div>

        <div className="mb-4 flex items-center gap-6">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
          <div className="relative">
            <Input type="text" className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-50" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="absolute right-3 top-4 text-green-500">✔️</span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">เลขบัตรประชาชน/<br/>Passport ID <span className="text-red-500">*</span></label>
          <div className="relative">
            <Input type="text"  className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-50" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
            <span className="absolute right-3 top-4 text-green-500">✔️</span>
          </div>
        </div>

        <div className=" flex items-center gap-12">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">ที่อยู่ <span className="text-red-500">*</span></label>
          <Input className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

     
      </CardContent>
    </Card>
    </div>
  );
}
