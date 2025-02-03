"use client"
import React, { useState } from 'react';

interface CustomAlert{
    title: String;
    message: String;
    onConfirm: () => void;
    onCancel?: () => void;
}

const CustomAlert = ({ title, message, onConfirm, onCancel }: CustomAlert) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => {
    onCancel?.();
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2 px-4 rounded">
        {title}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96 justify-center">
            <p className="text-gray-700 mb-6">{message}</p>
            <div className="flex justify-end">
                <button
                onClick={handleConfirm}
                className="text-[#059669] font-semibold text-base px-2"
              >
                ตกลง
              </button>
              {onCancel && <button
                onClick={handleCancel}
                className=" text-red-700 font-semibold text-base px-2"
              >
                ยกเลิก
              </button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomAlert