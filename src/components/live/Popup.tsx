interface Props {
  setShowErrorPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup({ setShowErrorPopup }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[426px] h-[130px] text-center">
        <p className="text-base font-normal">
          ราคาที่ท่านเลือกต่ำกว่าราคาปัจจุบัน
        </p>
        <p className="text-base font-normal">กรุณากรอกราคาใหม่</p>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowErrorPopup(false)}
            className="text-[#059669] font-medium hover:underline"
          >
            ตกลง
          </button>
        </div>
      </div>
    </div>
  );
}
