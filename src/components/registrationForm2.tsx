import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { getUserInfo } from "@/app/api/user/getUserInfo";

interface RegistrationForm2Props {
  isEdit?: boolean;
  userId?: string;
  onSubmit: (data: any) => void;
}

const RegistrationForm2 = forwardRef(({ isEdit = false, userId, onSubmit }: RegistrationForm2Props, ref) => {
  const [role, setRole] = useState<"buyer" | "seller">("seller");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      onSubmit({ role, email, password, confirmPassword });
    },
  }));

  useEffect(() => {
    if (isEdit && userId !== undefined) {
      const fetchUserData = async () => {
        try {
          const userInfo = await getUserInfo(userId);
          setRole(userInfo.role as "buyer" | "seller");
          setEmail(userInfo.email);
          setPassword(userInfo.password);
          setConfirmPassword(userInfo.confirmPassword);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
      fetchUserData();
    }
  }, [isEdit, userId]);

  return (
    <div className="bg-[#F6F7F9]">
      <h2 className="font-semibold text-2xl mb-5">ข้อมูลทั่วไป</h2>

      <Card className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardContent>
          <div className="mb-4 flex items-center gap-6">
            <label className="block text-gray-700 font-medium mb-2">
              คุณคือ <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {isEdit ? (
                <button
                  type="button"
                  className="flex-1 py-2 rounded-lg border w-24 h-12 bg-gray-800 text-white border-gray-800"
                  disabled
                >
                  {role === "buyer" ? "ผู้ซื้อ" : "ผู้ขาย"}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className={`flex-1 py-2 rounded-lg border w-40 h-14 ${
                      role === "buyer"
                        ? "bg-gray-800 text-white border-gray-800"
                        : "bg-white border-gray-300"
                    }`}
                    onClick={() => setRole("buyer")}
                  >
                    ผู้ซื้อ
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-2 rounded-lg border ${
                      role === "seller"
                        ? "bg-gray-800 text-white border-gray-800"
                        : "bg-white border-gray-300"
                    }`}
                    onClick={() => setRole("seller")}
                  >
                    ผู้ขาย
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mb-4 flex items-center gap-8">
            <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
              readOnly={isEdit}
            />
          </div>

          <div className="mb-4 flex items-center gap-3">
            <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
              รหัสผ่าน <span className="text-red-500">*</span>
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>

          <div className="ml-20">
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

export default RegistrationForm2;
