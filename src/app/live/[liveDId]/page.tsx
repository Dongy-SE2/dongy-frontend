"use server";

import MovebackButton from "@/components/MovebackButton";
import LiveBiddingHistory from "@/components/live/LiveBiddingHistory";
import LiveProductInfo from "@/components/live/LiveProductInfo";
import BiddingInfoCard from "@/components/live/BiddingInfoCard";
import getLiveById, { LiveInfo } from "@/app/api/live/getLive";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface Bid {
  name: string;
  amount: number;
  date: string;
  time: string;
}

const bidHistory: Bid[] = [
  { name: "กอไผ่ กอไผ่", amount: 2500, date: "21 ก.พ. 2568", time: "12:15 น." },
  { name: "กอไผ่ กอไผ่", amount: 3000, date: "21 ก.พ. 2568", time: "12:30 น." },
  { name: "กอไผ่ กอไผ่", amount: 3500, date: "21 ก.พ. 2568", time: "12:40 น." },
];

export default async function LiveBidding({
  params,
}: {
  params: Promise<{ liveDId: string }>;
}) {
  const liveDId = (await params).liveDId;
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const liveInfo = (await getLiveById(liveDId, session.user.jwt)) || null;
  const isLoading = false;

  function calculateTimeLeft(startDate): string {
    if (!startDate) return "ไม่มีกำหนดการ"; // No upcoming live

    const now = new Date();
    const start = new Date(startDate);
    const diffMs = Math.abs(start.getTime() - now.getTime());

    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} วัน`;
    if (hours > 0) return `${hours} ชั่วโมง`;
    return `${minutes} นาที`;
  }
  function formatThaiDate(isoString: string): string {
    const date = new Date(isoString);

    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth(); // 0-based index (Jan = 0)
    const yearBE = date.getUTCFullYear() + 543; // Convert to Buddhist Era
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // Ensure two digits

    // Map month index to Thai month name
    const thaiMonths = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const monthThai = thaiMonths[monthIndex];

    return `${day} ${monthThai} ${yearBE} ${hours}.${minutes} น.`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9]">
      <div className="flex justify-center items-center relative w-full pt-14 pb-6">
        {/* Live Stream */}
        <div className="w-full max-w-[724px] h-full max-h-[353px] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={
              liveInfo?.link ||
              "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0"
            }
            title="Bidding Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute right-96 top-14">
          <MovebackButton href="/product/view" />
        </div>
      </div>

      <div className="flex justify-center">
        <LiveProductInfo
          liveName={liveInfo?.title ?? "No live Name"}
          productName={liveInfo?.product ?? "No product Name"}
          sellerName={liveInfo?.sellerName ?? "No Seller Name"}
          productType={liveInfo?.productType ?? "No Product Type"}
          productDescription={
            liveInfo?.productDescription ?? "No Product Description"
          }
        />

        <div className="justify-center relative pl-5">
          <BiddingInfoCard
            currentBidding={liveInfo?.presentPrice ?? "No Present Price"}
            timeLeft={calculateTimeLeft(liveInfo?.endDate)}
            token={session.user.jwt}
            liveDId={liveDId}
            userId={session.user.id}
          />
          <LiveBiddingHistory
            startTime={formatThaiDate(liveInfo?.startDate ?? "")}
            endTime={formatThaiDate(liveInfo?.endDate ?? "")}
            biddingHistory={bidHistory ?? []}
          />
        </div>
      </div>
    </div>
  );
}
