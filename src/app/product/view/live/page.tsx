import Image from "next/image";
import getProductInfo from "@/app/api/product/getProductInfo";
import MovebackButton from "@/components/MovebackButton";
import { CircleUserRound, Link } from 'lucide-react';
import { Input } from "@/components/ui/input";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ productId: string }>;
})  {
    const productId = (await params).productId;
    const productInfo = await getProductInfo(productId);
    const isLive = true // get api about live status
    const timeLeft = 120 // need to connect api about time(null = not going to live soon)

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] ">
            <div className="flex justify-center items-center h-400 my-14">
                <div className="w-full max-w-[724px] aspect-video">
                    <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0"
                    title="Bidding Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                <MovebackButton href="/product/view"/>
            </div>
            
            
            <div className="flex justify-center">
                {/* Left: Product Detail Card */}
                <div className="w-[340px] h-[400px] bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold p-1">ประมูลรองเท้าสุดคุ้ม x2</h2>
                    
                    <div className="grid grid-cols-2 grid-rows-4 mt-6 align-center space-y-3">
                        <p className="text-lg font-medium">สินค้า</p> 
                        <p className="text-base font-normal text-gray-900">รองเท้า</p>
                        <p className="text-lg font-medium">ผู้ขาย</p> 
                        <p className="text-base font-normal text-gray-900 flex align-center">
                            <CircleUserRound className="w-[18px] h-[18px] mr-1"/> 
                            วสุพล ดิสสานนท์
                        </p>
                        <p className="text-lg font-medium ">ประเภท</p> 
                        <p className="text-base font-normal text-gray-900">รองเท้า</p>
                        <p className="text-lg font-medium">รายละเอียด</p>
                    </div>
                    <p className=" text-gray-600 font-normal">
                    รองเท้าใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบาย
                    </p>
                </div>

                {/* Right: Cards Container */}
                <div className="justify-center relative px-9">
                    {/* Top Right: Bidding Info Card */}
                    <div className="w-[365px] h-[200px] p-4 bg-white rounded-lg shadow-md text-center">
                        <div className="grid grid-cols-2 grid-rows-4 min-w-max min-h-max items-center">
                            <p className="text-lg font-medium ">ราคาปัจจุบัน</p> 
                            <p className="text-base font-normal text-gray-900">3,000 บาท</p>
                            <p className="text-lg font-medium ">เวลาที่เหลือ</p> 
                            <p className="text-base font-normal text-gray-900">20 นาที</p>
                            <p className="text-lg font-medium col-span-2">ราคาที่ต้องการประมูล (บาท)</p>
                            <button className="w-24 h-8 bg-[#10B981] text-white rounded-lg">ตกลง</button>
                        
                        </div>
                    </div>


                    {/* Bottom Right: Bidding Time Card */}
                    <div className="w-[365px] h-[180px] mt-4 p-4 bg-white rounded-lg shadow-md text-center">
                        <div className="grid grid-cols-2 grid-rows-4 align-center space-y-3">
                            <p className="text-lg font-medium">เวลาเริ่มต้น</p> 
                            <p className="text-base font-normal text-gray-900">21 กุมภาพันธ์ 2568 12.00 น.</p>
                            <p className="text-lg font-medium">เวลาเริ่มต้น</p> 
                            <p className="text-base font-normal text-gray-900">21 กุมภาพันธ์ 2568 12.00 น.</p>
                            <button className="col-span-2 bg-gray-600 text-white rounded-lg">ประวัติการประมูล</button>
                        </div>
                    </div>
                
                </div>
            
            </div>
        </div>
    );
    }
