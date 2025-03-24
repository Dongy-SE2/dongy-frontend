import { auth } from "@/auth";
import { redirect } from "next/navigation";

import MovebackButton from "@/components/MovebackButton";
import SellerInfo from "@/components/SellerInfo";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import getSellerReview from "../../api/review/getSellerReview";
import getSellerRating from "@/app/api/review/getSellerRating";

// const reviews = [
//   { name: "คุณ", rating: 4, comment: "Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet..." },
//   { name: "วสุธี ดิสสานนท์", rating: 4, comment: "Lorem ipsum dolor sit amet..." },
//   { name: "วสุธี ดิสสานนท์", rating: 5, comment: "Lorem ipsum dolor sit amet..." },
// ];

async function SellerReviewPage({
  params,
}: {
  params: Promise<{ seller_did: string }>;
}) {
  const session = await auth();
  if (!session || !session.user.id) redirect("/login");
  const seller_did = (await params).seller_did;
  const reviews = await getSellerReview(seller_did, session.user.jwt);
  const rating = await getSellerRating(seller_did, session.user.jwt);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-6 py-14">
      <div className="w-3/5 mx-auto">
        
        <div className="flex">
        <h1 className="text-3xl font-bold mb-4">รีวิวผู้ขาย</h1>
        <span className="ml-auto"><MovebackButton href="login"/></span>
        </div>

        <div className="flex  py-8 gap-10">

        <div className="flex flex-col w-1/2 gap-3">
        {rating && <SellerInfo sellerRating={rating} />}
 
        {/* Review Form */}
        <ReviewForm token={session.user.jwt} sellerDid={seller_did}/>
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
