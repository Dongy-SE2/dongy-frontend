import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

interface Review{
    name: string,
    rating: number ,
    comment: string
}

interface Reviews{
    reviews: Review[]
}

function ReviewList({reviews}:  Reviews){

    return(
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
    );
}
export default ReviewList