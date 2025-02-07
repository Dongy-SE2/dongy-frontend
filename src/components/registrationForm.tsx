"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function RegistrationForm() {
  const [title, setTitle] = useState("นาย");
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [dob, setDob] = useState("DD/MM/YYYY");
  const [phone, setPhone] = useState("Phone Number");
  const [idNumber, setIdNumber] = useState("ID Number");
  const [address, setAddress] = useState("Address");

  // Check if the date of birth is valid
  const isValidDate = (date: string) => !date.includes("30 กุมภาพันธ์");

  return (
    <Card className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <CardContent>
        <div className="mb-4 flex items-center gap-3">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">คำนำหน้า <span className="text-red-500">*</span></label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </select>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">ชื่อ <span className="text-red-500">*</span></label>
          <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="mb-4 flex items-center gap-3">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">สกุล <span className="text-red-500">*</span></label>
          <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">วันเกิด <span className="text-red-500">*</span></label>
          <div className="relative">
            <Input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
            <span className="absolute right-2 top-2 text-gray-500">📅</span>
          </div>
          {!isValidDate(dob) && <p className="text-red-500 text-sm mt-1">วันที่ไม่ถูกต้อง</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
          <div className="relative">
            <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="absolute right-2 top-2 text-green-500">✔️</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">เลขบัตรประชาชน / Passport ID <span className="text-red-500">*</span></label>
          <div className="relative">
            <Input type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
            <span className="absolute right-2 top-2 text-green-500">✔️</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 whitespace-nowrap">ที่อยู่ <span className="text-red-500">*</span></label>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

     
      </CardContent>
    </Card>
  );
}
