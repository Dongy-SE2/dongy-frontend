
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent} from "@/components/ui/card";
import MovebackButton from "@/components/MovebackButton";
import SellerInfo from "@/components/SellerInfo";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";

const reviews = [
  { name: "คุณ", rating: 4, comment: "Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet..." },
  { name: "วสุธี ดิสสานนท์", rating: 4, comment: "Lorem ipsum dolor sit amet..." },
  { name: "วสุธี ดิสสานนท์", rating: 5, comment: "Lorem ipsum dolor sit amet..." },
];

function SellerReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-6 py-14">
      <div className="w-3/5 mx-auto">
        
        <div className="flex">
        <h1 className="text-3xl font-bold mb-4">รีวิวผู้ขาย</h1>
        <span className="ml-auto"><MovebackButton href="login"/></span>
        </div>

        <div className="flex  py-8 gap-10">

        <div className="flex flex-col w-1/2 gap-3">
        <SellerInfo/>
        


        
        {/* Review Form */}
        <ReviewForm/>
        </div>

        <div className="w-1/2 items-center justify-center overflow-y-auto max-h-[527px]">
        
        <ReviewList reviews={reviews}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SellerReviewPage
