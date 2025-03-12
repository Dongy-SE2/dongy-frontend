import Image from "next/image";
import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-[#F6F7F9] bg-auto justify-evenly items-center flex">
      <div className=" flex items-center justify-center p-10">
        <Image
          src="/home_picture.svg"
          alt="Logo"
          className="pr-[14px]"
          width={400}
          height={400}
        />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center p-8 ">
        <div className="bg-[#F6F7F9] bg-auto p-8 rounded-lg  w-full max-w-md ">
          <h2 className="text-2xl font-semibold text-center mb-6 ">
            ลงชื่อเข้าใช้
          </h2>
          <LoginForm />
          <p className="text-center text-sm text-gray-500 mt-4">
            ยังไม่ได้เป็นสมาชิก?{" "}
            <a href="/register" className="text-green-600 font-medium">
              สร้างบัญชีใหม่
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
