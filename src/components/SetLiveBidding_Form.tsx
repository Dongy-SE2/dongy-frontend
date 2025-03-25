import React from "react";

interface SetLiveBiddingFormProps {
  LiveName: String
}

function SetLiveBidding_Form({ LiveName }: SetLiveBiddingFormProps) {
  return (
    <>
    <div>
      <form>

        <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
            ชื่อไลฟ์ <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
            required
            readOnly={isEdit}
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 
          
          321font-medium mb-1 whitespace-nowrap">
            สินค้า <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
            required
            readOnly={isEdit}
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
            เริ่มต้น <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
            required
            readOnly={isEdit}
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
            สิ้นสุด <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
            required
            readOnly={isEdit}
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
            สถานะ <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
            required
            readOnly={isEdit}
            />
          </div>

          <div className="mb-4 flex items-center gap-8">
          <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
            ลิงก์ <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
            required
            readOnly={isEdit}
            />
          </div>

      </form>
    </div>
    </>
  );
}

export default SetLiveBidding_Form;

