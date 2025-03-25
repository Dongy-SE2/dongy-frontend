"use client";

import { CircleUserRound } from "lucide-react";

type Props = {
  liveName: String | "No live Name";
  productName: String | "No product Name";
  sellerName: String | "No Seller Name";
  productType: String | "No Product Type";
  productDescription: String | "No Product Description";
};

export default function LiveProductInfo({
  liveName,
  productName,
  sellerName,
  productType,
  productDescription,
}: Props) {
  return (
    <div className="w-[340px] h-[400px] bg-white p-7 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-2xl font-semibold">{liveName}</h2>
      <div className="grid grid-cols-2 grid-rows-4 mt-6">
        <p className="text-lg font-medium pb-3">สินค้า</p>
        <p className="text-base font-normal text-gray-900 pb-3">
          {productName}
        </p>
        <p className="text-lg font-medium pb-3">ผู้ขาย</p>
        <p className="text-base font-normal text-gray-900 flex items-center pb-3">
          <CircleUserRound className="w-[18px] h-[18px] mr-1" />
          {sellerName}
        </p>
        <p className="text-lg font-medium pb-3">ประเภท</p>
        <p className="text-base font-normal text-gray-900 pb-3">
          {productType}
        </p>
        <p className="text-lg font-medium pb-3">รายละเอียด</p>
      </div>
      <p className="text-sm text-gray-600 font-normal">{productDescription}</p>
    </div>
  );
}
