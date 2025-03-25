import ProductManageHeader from "@/components/ProductManageHeader";
import getProductInfo from "@/app/api/product/getProductInfo";
import ProductDetailCard from "@/components/live/ProductDetailCard";
import LiveStatusCard from "@/components/live/LiveStatusCard";
import ProductImageCard from "@/components/live/ProductImageCard";
import ProductWraper from "@/components/ProductWraper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import getLiveById from "@/app/api/live/getLive";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productDId: string }>;
}) {
  const productDId = (await params).productDId;
  const session = await auth();
  if (session === null || !session.user.id) redirect("/login");
  const productInfo = await getProductInfo(productDId, session.user.jwt);

  const liveInfo = await getLiveById(productInfo.liveDId, session.user.jwt);
  console.log(liveInfo);
  const isLive = true; // get api about live status
  const timeLeft = "120"; // need to connect api about time(null = not going to live soon)

  return (
    <ProductWraper>
      <ProductManageHeader name="รายละเอียดสินค้า" href="/product/" />

      {/* Cards Container */}
      <div className="flex justify-evenly mt-8">
        {/* Left: Product Image Card */}
        <div className="relative">
          {/* Top Left: Image Card */}
          <ProductImageCard src={productInfo.image[0]} isLive={isLive} />
          {/* product status condition*/}
          <LiveStatusCard isLive={isLive} timeLeft={timeLeft} />
        </div>

        {/* Right: Product Detail Card */}
        <ProductDetailCard
          productName={productInfo.name}
          sellerName={productInfo.seller}
          productType={"รองเท้า"}
          productPrice={String(productInfo.minPrice)}
          productDescription={productInfo.description}
        />
      </div>
    </ProductWraper>
  );
}
