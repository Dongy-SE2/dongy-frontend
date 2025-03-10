import Image from "next/image";
import { CircleUserRound } from 'lucide-react';
import ProductManageHeader from "@/components/ProductManageHeader";
import getProductInfo from "@/app/api/product/getProductInfo";
import Link from "next/link";
import ProductDetailCard from "@/components/live/ProductDetailCard";
import LiveStatusCard from "@/components/live/LiveStatusCard";
import ProductImageCard from "@/components/live/ProductImageCard";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ productId: string }>;
})  {
    const productId = (await params).productId;
    const productInfo = await getProductInfo(productId);
    const isLive = true // get api about live status
    const timeLeft = '120' // need to connect api about time(null = not going to live soon)

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] ">
            <h1 className="flex place-content-evenly ">
                <div className=" w-[940px] font-semibold text-black text-3xl px-3 py-16 ">
                    <ProductManageHeader name="รายละเอียดสินค้า" href="/product/" />
                </div>    
            </h1>
            
            {/* Cards Container */}
            <div className="flex justify-center">
            {/* Left: Product Image Card */}
                <div className="relative px-9">
                    {/* Top Left: Image Card */}
                    <ProductImageCard
                        src="/image/shoes.jpg"
                        isLive={isLive}
                    />
                    {/* product status condition*/}
                    <LiveStatusCard
                        isLive={isLive}
                        timeLeft={timeLeft}
                    />
                </div>

                {/* Right: Product Detail Card */}
                <ProductDetailCard
                    productName={"รองเท้า"}
                    sellerName={"วสุพล ดิสสานนท์"}
                    productType={"รองเท้า"}
                    productPrice={"2,000"}
                    productDescription={"รองเท้าใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบาย"}
                />
            </div>
        </div>
    );
    }
