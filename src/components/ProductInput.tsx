"use client";

import "./ProductInput.css";
import { ProductInfo } from "@/app/api/product/getProductInfo";
import { useState } from "react";

interface Props {
  data: ProductInfo;
}

const ProductInput: React.FC<Props> = ({ data }) => {
  const [sliderValue, changeSliderValue] = useState<number>(data.minPrice);
  return (
    <div>
      <h2 className="font-semibold text-2xl">ข้อมูลสินค้า</h2>
      <p className="text-gray-400 my-3 text-sm">กรอกข้อมูลสินค้าให้ครบถ้วน</p>
      <p className="font-medium my-3">
        ชื้อสินค้า<span className="text-red-600">*</span>
      </p>
      <input
        type="text"
        name="product_name"
        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
        defaultValue={data.name}
        required
      />
      <p className="font-medium my-3">
        ประเภท<span className="text-red-600">*</span>
      </p>
      <select
        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
        name="categories"
        defaultValue={data.type}
        required
      >
        <option value="">เลือกประเภท</option>
        {/* ASK BACKEND FOR TYPE OPTION */}
      </select>
      <p className="font-medium my-3">
        ราคาเริ่มต้น (บาท)<span className="text-red-600">*</span>
      </p>
      {/* TODO: Calculate state */}
      <div className="my-3">
        <input
          type="range"
          min="0"
          max="100000"
          name="price"
          onChange={(e) => changeSliderValue(parseInt(e.currentTarget.value))}
          value={sliderValue}
          className="align-middle accent-green-500 border-none"
        />
        <input
          type="number"
          className="w-28 num-in bg-gray-100 px-4 py-2 rounded-[8px] text-sm text-center ml-10"
          onChange={(e) => changeSliderValue(parseInt(e.currentTarget.value))}
          value={sliderValue}
        />
      </div>
      <p className="font-medium mt-3">รายละเอียด</p>
      <p className="text-gray-400 mt-1 mb-3 text-sm">ไม่เกิน 200 อักขระ</p>
      <textarea
        maxLength={200}
        name="product_description"
        className="resize-none text-sm bg-gray-100 w-full h-36 mb-7 px-4 py-2"
        defaultValue={data.description}
      />
      <div className="flex justify-center w-full">
        <input
          type="submit"
          className="pointer py-2 px-9 bg-green-500 text-white rounded-lg cursor-pointer"
          value="บันทึก"
        />
      </div>
    </div>
  );
};

export default ProductInput;
