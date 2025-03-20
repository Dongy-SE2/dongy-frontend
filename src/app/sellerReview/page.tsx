
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent} from "@/components/ui/card";
import MovebackButton from "@/components/MovebackButton";

const reviews = [
  { name: "คุณ", rating: 4, comment: "Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet..." },
  { name: "วสุธี ดิสสานนท์", rating: 4, comment: "Lorem ipsum dolor sit amet..." },
  { name: "วสุธี ดิสสานนท์", rating: 5, comment: "Lorem ipsum dolor sit amet..." },
];

export default function SellerReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-6 py-14">
      <div className="w-3/5 mx-auto">
        
        <div className="flex">
        <h1 className="text-3xl font-bold mb-4">รีวิวผู้ขาย</h1>
        <span className="ml-auto"><MovebackButton href="login"/></span>
        </div>

        <div className="flex  py-8 gap-10">

        <div className="flex flex-col w-1/2 gap-3">
        {/* Seller Info */}
        
          <Card className=" flex items-center p-4 mb-6 h-24">
            <div className="">
              <Avatar className="w-12 h-12 mr-4">
              <AvatarImage src="/image/ProfilePicture.jpg" alt="image holder"/>
              </Avatar>
            </div>
            <div className="">
              <p className="font-bold">วสุพล ดิสสานนท์</p>
              <div className="flex items-center text-orange-500 text-sm bg-yellow-100 rounded-md w-1/2 justify-center">
                <Star size={16} fill="currentColor"  />
                <span className="ml-1">4.6</span>
              </div>
            </div>
          </Card>
        


        
        {/* Review Form */}
        <div className="">
          <h2 className="font-bold mb-6 text-2xl">แสดงความคิดเห็น</h2>
          <form >
            <Card className="p-4 mb-6 h-full">
              <p className="mb-2">
                คะแนน
                <span className="text-red-500">*</span>
              </p>
            <div className="flex mb-2 ">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} fill="currentColor" className={i <= 3 ? "text-orange-500" : "text-gray-300"} />
              ))}
            </div>
            <div className="mt-6">
              <p >ความคิดเห็น</p>
              <textarea placeholder="" className="mt-4 mb-2 bg-gray-100 w-full h-24 rounded-md shadow-sm resize-none p-2" />
            </div>
            <div className="flex justify-center ">
              <Button className=" bg-gray-600 text-white mt-4 w-32 mb-5">ส่ง</Button>
            </div>
        </Card>
        </form>
        </div>
        </div>

        <div className="w-1/2 items-center justify-center overflow-y-auto max-h-[527px]">
        {/* Reviews List */}
        <Card className="p-4 h-full text-center ">
          {reviews.map((review, index) => (
            <CardContent key={index} className="relative leading-none overflow-y-auto h-32 mb-4 last:mb-0 shadow-md rounded-md border border-grey-500">
              <div className="flex">
                <p className="font-medium">{review.name}</p>
                <div className="flex items-center text-orange-500 text-sm mb-1 ml-auto">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className={i < review.rating ? "text-orange-500" : "text-gray-300"}
                  />
                ))}
                </div>
              </div>
              <p className="leading-tight text-sm text-gray-600 mt-3">{review.comment}</p>
              <Button className="">
                <img src="/image/delete.png" alt="deleteButton" className="absolute bottom-2 right-1 size-5"/>
              </Button>
            </CardContent>
          ))}
        </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
