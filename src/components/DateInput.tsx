"use client";
import React from 'react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ''); 

    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    }
    if (input.length > 5) {
      input = input.slice(0, 5) + '/' + input.slice(5);
    }
    if (input.length > 10) {
      input = input.slice(0, 10); 
    }

    onChange(input);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="DD/MM/YYYY"
      className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64 placeholder-gray-500"
    />
  );
};

export default DateInput;
