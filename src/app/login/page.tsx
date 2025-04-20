import Image from "next/image";
import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% justify-evenly items-start flex">
      <div className="mt-10 flex flex-row gap-12">
        <div className=" flex items-center justify-center p-10">
          <Image
            src="/home_picture.svg"
            alt="Logo"
            className="pr-[14px]"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-10 ">
          <div className="bg-white bg-opacity-60 backdrop-blur-lg border border-gray-200 bg-auto p-8 rounded-lg  w-full max-w-md ">
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
    </div>
  );
}
