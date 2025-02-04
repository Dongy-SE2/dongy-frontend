"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function RegistrationForm() {
  const [title, setTitle] = useState("นาย");
  const [firstName, setFirstName] = useState("วสุพล");
  const [lastName, setLastName] = useState("ดิสสานนท์");
  const [dob, setDob] = useState("30 กุมภาพันธ์ 2548");
  const [phone, setPhone] = useState("053-420-6969");
  const [idNumber, setIdNumber] = useState("1-1253-69694-20-0");
  const [address, setAddress] = useState("พุทธบาท");

  // Check if the date of birth is valid
  const isValidDate = (date: string) => !date.includes("30 กุมภาพันธ์");

  return (
    <Card className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <CardContent>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">คำนำหน้า *</label>
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

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">ชื่อ *</label>
          <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">สกุล *</label>
          <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">วันเกิด *</label>
          <div className="relative">
            <Input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
            <span className="absolute right-2 top-2 text-gray-500">📅</span>
          </div>
          {!isValidDate(dob) && <p className="text-red-500 text-sm mt-1">วันที่ไม่ถูกต้อง</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">เบอร์โทรศัพท์ *</label>
          <div className="relative">
            <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="absolute right-2 top-2 text-green-500">✔️</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">เลขบัตรประชาชน / Passport ID *</label>
          <div className="relative">
            <Input type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
            <span className="absolute right-2 top-2 text-green-500">✔️</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">ที่อยู่ *</label>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <Button className="w-full bg-blue-500 text-white py-2 rounded-lg">บันทึก</Button>
      </CardContent>
    </Card>
  );
}
