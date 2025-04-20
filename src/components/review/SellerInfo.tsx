import { Card } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";
import { SellerRating } from "@/app/api/review/getSellerRating";
import Link from "next/link";

function SellerInfo({
  sellerRating,
  seller_did,
}: {
  sellerRating: SellerRating;
  seller_did: string;
}) {
  return (
    <Card className="flex items-center p-4 mb-6 h-24 bg-white bg-opacity-70 border border-gray-100">
      <Avatar className="w-12 h-12 mr-4">
        <AvatarImage
          src={sellerRating?.profile_picture?.url || "/default-avatar.png"}
          alt="Seller profile"
        />
      </Avatar>
      <div>
        <p className="font-bold">
          {sellerRating?.firstname + " " + sellerRating?.lastname ||
            "ไม่ระบุชื่อ"}
        </p>
        <div className="flex items-center text-orange-500 text-sm bg-yellow-100 rounded-md w-1/2 justify-center p-1">
          <Star size={16} fill="currentColor" />
          <span className="ml-1">
            {sellerRating?.average_rating?.toFixed(1) || "N/A"}
          </span>
        </div>
      </div>
      <Link
        href={`/report?type=user&id=${seller_did}`}
        className="bg-red-500 px-3 py-1 text-white rounded-md ml-40"
      >
        รายงาน
      </Link>
    </Card>
  );
}
export default SellerInfo;
