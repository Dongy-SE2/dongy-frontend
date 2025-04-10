import { auth } from "@/auth";
import { redirect } from "next/navigation";

import MovebackButton from "@/components/MovebackButton";
import SellerInfo from "@/components/review/SellerInfo";
import ReviewForm from "@/components/review/ReviewForm";
import ReviewList from "@/components/review/ReviewList";
import getSellerReview from "@/app/api/review/getSellerReview";
import getSellerRating from "@/app/api/review/getSellerRating";

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
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
      <div className="w-3/5 mx-auto">
        <div className="flex">
          <h1 className="text-2xl font-bold mb-4">รีวิวผู้ขาย</h1>
          <span className="ml-auto">
            <MovebackButton back />
          </span>
        </div>

        <div className="flex  py-8 gap-10">
          <div className="flex flex-col w-1/2 gap-3">
            {rating && <SellerInfo sellerRating={rating} />}
            <ReviewForm token={session.user.jwt} sellerDid={seller_did} />
          </div>

          <div className="w-1/2 items-center justify-center overflow-y-auto max-h-[527px]">
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerReviewPage;
