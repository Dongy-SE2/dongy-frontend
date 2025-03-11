"use client";

import { CircleUserRound } from "lucide-react";

type Props = {
  productName: String;
  sellerName: String;
  productType: String;
  productPrice: String;
  productDescription: String;

};

export default function ProductDetailCard({ productName, sellerName, productType, productPrice, productDescription }: Props) {
  return (
    <div className="w-[428px] h-[393px] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold p-1">{productName}</h2>
        <p className="text-gray-400 text-sm flex items-center">
            <CircleUserRound className="w-[18px] h-[18px] mr-1"/> 
            {sellerName}
        </p>
        <div className="grid grid-cols-2 grid-rows-3 mt-6 align-center space-y-1">
            <p className="text-lg font-medium ">ประเภท</p> 
            <p className="text-base font-normal text-gray-900">{productType}</p>
            <p className="text-lg font-medium">ราคาเริ่มต้น</p> 
            <p className="text-base font-normal text-gray-900">{productPrice} บาท</p>
            <p className="text-lg font-medium">รายละเอียด</p>
        </div>
        <p className="mt-3 text-gray-600 font-normal">{productDescription}</p>
    </div>
  );
}
