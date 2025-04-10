import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { SellerReview } from "@/app/api/review/getSellerReview";

const StarScore: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div className="flex items-center text-sm mb-1 ml-auto">
      {[...Array(5).keys()].map((i) => (
        <Star
          key={i}
          size={16}
          fill="currentColor"
          className={i < score ? "text-orange-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

interface Reviews {
  reviews: SellerReview[];
}

function ReviewList({ reviews }: Reviews) {
  return (
    <Card className="p-4 text-center bg-white">
      {reviews.map((review) => (
        <CardContent
          key={review.documentId}
          className="relative overflow-y-auto h-32 mb-4 last:mb-0 shadow-sm rounded-md border border-grey-500"
        >
          <div className="bg-white min-h-full p-3 flex flex-col">
            <div className="flex justify-between">
              <p className="font-medium">{review.buyer.firstname}</p>
              <StarScore score={review.rating} />
            </div>
            <p className="leading-tight text-sm text-gray-600 mt-5">
              {review.comment}
            </p>
          </div>
        </CardContent>
      ))}
    </Card>
  );
}
export default ReviewList;
