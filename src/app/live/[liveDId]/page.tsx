"use server";

import MovebackButton from "@/components/MovebackButton";
import LiveBiddingHistory from "@/components/live/LiveBiddingHistory";
import LiveProductInfo from "@/components/live/LiveProductInfo";
import BiddingInfoCard from "@/components/live/BiddingInfoCard";
import getLiveById from "@/app/api/live/getLive";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { calculateTimeLeft, formatThaiDate } from "@/lib/utils";
import Livestream from "@/components/live/LiveInfo";

export default async function LiveBidding({
  params,
}: {
  params: Promise<{ liveDId: string }>;
}) {
  const liveDId = (await params).liveDId;
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const liveInfo = (await getLiveById(liveDId, session.user.jwt)) || null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100%">
      <div className="flex justify-center items-center relative w-full pt-14 pb-6">
        {/* Live Stream */}
        <Livestream liveInfo={liveInfo} />
        <div className="absolute right-96 top-14">
          <MovebackButton
            href={
              liveInfo?.productDId ? `/product/${liveInfo.productDId}` : "#"
            }
          />
        </div>
      </div>

      <div className="flex justify-center">
        <LiveProductInfo
          liveName={liveInfo?.title || "No live Name"}
          productName={liveInfo?.product || "No product Name"}
          sellerName={
            `${liveInfo?.OwnerFirstName || ""} ${liveInfo?.OwnerLastName ?? ""}`.trim() ||
            "No Seller Name"
          }
          productType={liveInfo?.productType || "No Product Type"}
          productDescription={
            liveInfo?.productDescription || "No Product Description"
          }
        />

        <div className="justify-center relative pl-5">
          <BiddingInfoCard
            currentBidding={liveInfo?.presentPrice || "No Present Price"}
            timeLeft={calculateTimeLeft(liveInfo?.endDate)}
            token={session.user.jwt}
            liveDId={liveDId}
            userId={session.user.id}
          />
          <LiveBiddingHistory
            startTime={formatThaiDate(liveInfo?.startDate || "")}
            endTime={formatThaiDate(liveInfo?.endDate || "")}
            biddingHistory={liveInfo?.bids || null}
            liveDId={liveDId}
            token={session.user.jwt}
          />
        </div>
      </div>
    </div>
  );
}
