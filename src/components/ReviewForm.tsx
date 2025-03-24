"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import createSellerReview from "@/app/api/review/createSellerReview";
import { useSession } from "next-auth/react";

interface ReviewFormProps {
  sellerDid: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ sellerDid }) => {
  const session = useSession();
  const [rating, setRating] = useState<number>(0);  // State to track rating
  const [comment, setComment] = useState<string>(""); // State to track comment

  const handleRatingClick = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    const response = await createSellerReview( session.data?.user.jwt || "" , {
      rating,
      comment,
      seller: sellerDid,
    });

    if (response) {
      alert("Review submitted successfully!");
      setRating(0);
      setComment("");
    }
  };

  return (
    <div className="mb-8">
      <h2 className="font-bold mb-6 text-2xl">แสดงความคิดเห็น</h2>
      <form onSubmit={handleSubmit}>
        <Card className="p-4 mb-6 h-full">
          <p className="mb-2">
            คะแนน
            <span className="text-red-500">*</span>
          </p>
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={24}
                fill="currentColor"
                className={i <= rating ? "text-orange-500" : "text-gray-300"}
                onClick={() => handleRatingClick(i)} // Handle rating click
              />
            ))}
          </div>
          <div className="mt-6">
            <p>ความคิดเห็น</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)} // Track comment input
              placeholder="กรุณากรอกความคิดเห็นของคุณ"
              className="mt-4 mb-2 bg-gray-100 w-full h-24 rounded-md shadow-sm resize-none p-2"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="bg-gray-600 text-white mt-4 w-32 mb-5">
              ส่ง
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default ReviewForm;
