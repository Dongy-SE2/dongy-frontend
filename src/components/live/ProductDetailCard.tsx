import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { Star } from "lucide-react";

type Props = {
  productName: string;
  sellerName: string;
  productType: string;
  productPrice: string;
  productDescription: string;
  sellerDId;
  reviewScore;
};

export default function ProductDetailCard({
  productName,
  sellerName,
  productType,
  productPrice,
  productDescription,
  sellerDId,
  reviewScore,
}: Props) {
  return (
    <div className="w-full max-w-[438px] h-96 bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
      <h2 className=" text-2xl font-semibold p-1">{productName}</h2>
      <p className="text-gray-400 text-sm flex items-center space-x-3">
        <CircleUserRound className="w-[18px] h-[18px] mr-1" />
        <Link href={`/review/${sellerDId}`} className="underline">
          {sellerName}
        </Link>
        <span
          className={`flex px-3 py-1 text-xs font-medium rounded-xl bg-yellow-100 text-yellow-600 space-x-1`}
        >
          <Star className="text-yellow-600 size-3"></Star>
          {reviewScore}
        </span>
      </p>
      <div className="grid grid-cols-2 grid-rows-3 mt-6 align-center space-y-1">
        <p className="text-lg font-medium ">ประเภท</p>
        <p className="text-base font-normal text-gray-900">{productType}</p>
        <p className="text-lg font-medium">ราคาเริ่มต้น</p>
        <p className="text-base font-normal text-gray-900">
          {productPrice} บาท
        </p>
        <p className="text-lg font-medium">รายละเอียด</p>
      </div>
      <p className="mt-3 max-h-36 text-gray-600 font-normal">
        {productDescription}
      </p>
    </div>
  );
}
