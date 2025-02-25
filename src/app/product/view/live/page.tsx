"use client"; // Ensure this is a client-side component

import { useState, useEffect } from "react";
import getProductInfo from "@/app/api/product/getProductInfo";
import MovebackButton from "@/components/MovebackButton";
import { CircleUserRound } from "lucide-react";
import CustomAlert from "@/components/CustomAlert";

export default function LiveBidding({ params }) {
  const [productInfo, setProductInfo] = useState(null);
  const [biddingPrice, setBiddingPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const currentBidding = 3000; // Example current bid

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductInfo(params.productId);
      setProductInfo(data);
    }
    fetchProduct();
  }, [params.productId]);

  function placeBidding() {
    if (biddingPrice < currentBidding) {
      setShowAlert(true);
      return;
    }
    console.log("Bidding placed:", biddingPrice);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9]">
      <div className="flex justify-center items-center relative w-full pt-14 pb-6">
        {/* Live Stream */}
        <div className="w-full max-w-[724px] h-full max-h-[353px] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0"
            title="Bidding Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute right-64 top-14">
          <MovebackButton href="/product/view" />
        </div>
      </div>

      <div className="flex justify-center">
        {/* Left: Product Detail Card */}
        <div className="w-[340px] h-[400px] bg-white p-7 rounded-lg shadow-md">
          {/* <h2 className="text-2xl font-semibold">{productInfo?.name || "Loading..."}</h2> */}
          <h2 className="text-2xl font-semibold">ประมูลรองเท้าสุดคุ้ม x2</h2>
          <div className="grid grid-cols-2 grid-rows-4 mt-6">
            <p className="text-lg font-medium pb-3">สินค้า</p>
            {/* <p className="text-base font-normal text-gray-900 pb-3">{productInfo?.category || "Loading..."}</p> */}
            <p className="text-base font-normal text-gray-900 pb-3">รองเท้า</p>
            <p className="text-lg font-medium pb-3">ผู้ขาย</p>
            <p className="text-base font-normal text-gray-900 flex items-center pb-3">
              <CircleUserRound className="w-[18px] h-[18px] mr-1" />
              {/* {productInfo?.seller || "Loading..."} */}
              วสุพล ดิสสานนท์
            </p>
            <p className="text-lg font-medium pb-3">ประเภท</p>
            {/* <p className="text-base font-normal text-gray-900 pb-3">{productInfo?.type || "Loading..."}</p> */}
            <p className="text-base font-normal text-gray-900 pb-3">รองเท้า</p>
            <p className="text-lg font-medium pb-3">รายละเอียด</p>
          </div>
          {/* <p className="text-sm text-gray-600 font-normal">{productInfo?.description || "Loading..."}</p> */}
          <p className="text-sm text-gray-600 font-normal">รองเท้าใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบายใส่ง่ายใส่สบาย</p>
        </div>

        {/* Right: Bidding Info */}
        <div className="justify-center relative pl-5">
          {/* Bidding Info Card */}
          <div className="w-[365px] h-[202px] p-7 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-2 grid-rows-3">
              <p className="text-base font-medium text-left pb-3">ราคาปัจจุบัน</p>
              <p className="text-xl font-semibold text-[#10B981] text-left px-5 pb-3">{currentBidding} บาท</p>
              <p className="text-base font-medium text-left pb-3">เวลาที่เหลือ</p>
              <p className="text-xl font-normal text-gray-900 text-left px-5 pb-3">20 นาที</p>
              <p className="text-base font-medium text-left col-span-2">ราคาที่ต้องการประมูล (บาท)</p>
            </div>
            <div className="flex space-x-3 items-center">
              <input
                type="number"
                placeholder="0"
                value={biddingPrice}
                onChange={(e) => setBiddingPrice(Number(e.target.value))}
                className="bg-[#F3F4F6] rounded-lg w-40 h-11 text-center"
              />
              <button
                onClick={placeBidding}
                className="w-24 h-8 bg-[#10B981] font-medium text-base text-white rounded-lg"
              >
                ตกลง
              </button>
            </div>
          </div>

          {/* Bidding History */}
          <div className="w-[365px] h-[180px] mt-4 p-7 bg-white rounded-lg shadow-md text-center">
            <div className="grid grid-cols-3 grid-rows-2">
              <p className="text-lg font-medium pb-3">เวลาเริ่มต้น</p>
              <p className="text-base font-normal text-gray-900 col-span-2 pb-3">21 กุมภาพันธ์ 2568 12.00 น.</p>
              <p className="text-lg font-medium">เวลาสิ้นสุด</p>
              <p className="text-base font-normal text-gray-900 col-span-2">21 กุมภาพันธ์ 2568 14.00 น.</p>
            </div>
            <button className="w-36 h-9 mt-4 col-span-3 place-self-center bg-gray-600 font-medium text-base text-white rounded-lg">
              ประวัติการประมูล
            </button>
          </div>
        </div>
      </div>

      {/* Alert */}
      {showAlert && (
        <CustomAlert
          title="บันทึก"
          message="กรุณาเสนอราคาที่สูงกว่า"
          onConfirm={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}
