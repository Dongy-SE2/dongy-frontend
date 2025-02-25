import Image from "next/image";
import { CircleUserRound } from 'lucide-react';
import ProductManageHeader from "@/components/ProductManageHeader";
import getProductInfo from "@/app/api/product/getProductInfo";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ productId: string }>;
})  {
    const productId = (await params).productId;
    const productInfo = await getProductInfo(productId);
    const isLive = false // get api about live status
    const timeLeft = null // need to connect api about time(null = not going to live soon)

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
                <div className="relative w-[385px] h-[221px]">
                <Image
                    src="/image/shoes.jpg"
                    alt="shoes"
                    width={385}
                    height={221}
                    className="rounded-lg object-cover w-full"
                />
                {/* Live condition */}
                {isLive && (<div className="absolute top-2 left-2 bg-[#10B981] px-2 py-1 rounded-lg flex align-middle items-center space-x-1">
                    <div className="bg-white rounded-full w-3 h-3"/>
                    <div className="text-white text-base ">LIVE</div>
                </div>)}

                </div>

                {/* product status condition*/}
                {isLive &&(<div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
                <p className="text-lg font-semibold">สินค้านี้กำลังมีการประมูล</p>
                <p className="text-base text-gray-600">การประมูลจะสิ้นสุดในอีก {timeLeft} นาที </p>
                <button className="mt-3 bg-[#10B981] text-white px-4 py-2 rounded-lg">ดูการประมูล</button>
                </div>)}
                {!isLive && timeLeft != null &&(<div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
                <p className="text-lg font-semibold">สินค้านี้กำลังจะมีการประมูล</p>
                <p className="text-base text-gray-600">การประมูลจะเริ่มต้นในอีก {timeLeft} นาที</p>
                <button className="mt-3 bg-grey-600 text-white px-4 py-2 rounded-lg">ดูการประมูล</button>
                </div>)}
                {!isLive && timeLeft == null && (<div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
                <p className="text-lg font-semibold">สินค้านี้ยังไม่มีการประมูล</p>
                </div>)}

            </div>

            {/* Right: Product Detail Card */}

            <div className="w-[428px] h-[393px] bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold p-1">รองเท้า</h2>
                <p className="text-gray-400 text-sm flex align-center">
                    <CircleUserRound className="w-[18px] h-[18px] mr-1"/> 
                    วสุพล ดิสสานนท์
                </p>
                <div className="grid grid-cols-2 grid-rows-3 mt-6 align-center space-y-1">
                    <p className="text-lg font-medium ">ประเภท</p> 
                    <p className="text-base font-normal text-gray-900">รองเท้า</p>
                    <p className="text-lg font-medium">ราคาเริ่มต้น</p> 
                    <p className="text-base font-normal text-gray-900">2,000 บาท</p>
                    <p className="text-lg font-medium">รายละเอียด</p>
                </div>
                <p className="mt-3 text-gray-600 font-normal">
                รองเท้าใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบาย
                </p>
            </div>
            </div>
        </div>
    );
    }
