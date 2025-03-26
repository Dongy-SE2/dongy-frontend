import ProductManageHeader from "@/components/ProductManageHeader";
import getProductInfo from "@/app/api/product/getProductInfo";
import ProductDetailCard from "@/components/live/ProductDetailCard";
import LiveStatusCard from "@/components/live/LiveStatusCard";
import ProductImageCard from "@/components/live/ProductImageCard";
import ProductWraper from "@/components/ProductWraper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import getLiveById from "@/app/api/live/getLive";
import getSellerRating from "@/app/api/review/getSellerRating";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productDId: string }>;
}) {
  const productDId = (await params).productDId;
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const productInfo = await getProductInfo(productDId, session.user.jwt);
  let isLive = false;
  let timeLeft = "";
  if (productInfo.liveDId !== null) {
    const liveInfo = await getLiveById(productInfo.liveDId, session.user.jwt);
    isLive = liveInfo?.status === "ongoing"; // Check if live is currently streaming
    if (isLive) timeLeft = calculateTimeLeft(liveInfo?.endDate);
    else timeLeft = calculateTimeLeft(liveInfo?.startDate);
  }
  const reviewInfo = await getSellerRating(
    productInfo.sellerDId,
    session.user.jwt
  );

  // ✅ Function to calculate time left before the live session starts
  function calculateTimeLeft(startDate): string {
    if (!startDate) return "ไม่มีกำหนดการ"; // No upcoming live

    const now = new Date();
    const start = new Date(startDate);
    const diffMs = Math.abs(start.getTime() - now.getTime());

    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `เริ่มในอีก ${days} วัน`;
    if (hours > 0) return `เริ่มในอีก ${hours} ชั่วโมง`;
    return `เริ่มในอีก ${minutes} นาที`;
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-emerald-100 from-0% via-slate-50 via-30% to-gray-50 to-100% p-16">
    <ProductWraper>
      <ProductManageHeader name="รายละเอียดสินค้า" href="/product/" />

      {/* Cards Container */}
      <div className="flex justify-evenly mt-8">
        {/* Left: Product Image Card */}
        <div className="relative">
          {/* Top Left: Image Card */}
          <ProductImageCard src={productInfo.image[0]} isLive={isLive} />
          {/* product status condition*/}
          <LiveStatusCard
            isLive={isLive}
            timeLeft={timeLeft}
            liveDId={productInfo.liveDId}
          />
        </div>
        {/* Right: Product Detail Card */}
        <ProductDetailCard
          productName={productInfo.name}
          sellerName={productInfo.seller}
          productType={productInfo.type}
          productPrice={String(productInfo.minPrice)}
          productDescription={productInfo.description}
          sellerDId={productInfo.sellerDId}
          reviewScore={reviewInfo?.average_rating || "No Review"}
        />
      </div>
    </ProductWraper>
    </div>

  );
}
