"use client"
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { LinkIcon } from "lucide-react";

interface LiveItem{
    id: number;
    title: string;
    product: string;
    startDate: string;
    endDate: string;
    status: string;
    link: string;
}

const liveBiddingItems: LiveItem[] = [
    {
        id: 1, title: "ประมูลรองเท้าสนุกสุดคุ้ม x2", product: "รองเท้า", startDate: "21 กุมภาพันธ์ 2568 12.00 น.", endDate: "21 กุมภาพันธ์ 2568 13.00 น.", status: "สาธารณะ", link: "https://youtu.be/SEzKyFVaIyU"  
    },
    {
        id: 2, title: "ประมูลรองเท้าสนุกสุดคุ้ม x3", product: "รองเท้า", startDate: "21 กุมภาพันธ์ 2568 14.00 น.", endDate: "21 กุมภาพันธ์ 2568 15.00 น.", status: "สาธารณะ", link: "https://youtu.be/SEzKyFVaIyU"  
    },
    {
        id: 3, title: "ประมูลรองเท้าสนุกสุดคุ้ม x4", product: "รองเท้า", startDate: "21 กุมภาพันธ์ 2568 16.00 น.", endDate: "21 กุมภาพันธ์ 2568 17.00 น.", status: "สาธารณะ", link: "https://youtu.be/SEzKyFVaIyU"  
    }
]

export default function SetLiveBiddingPage(){
    const [selectedItem, setSelectedItem] = useState<LiveItem | null>(liveBiddingItems[0]);

    return(
        <>
        <div className=" p-6">
            <header className=" p-4 flex items-center justify-between">
                <h1 className="text-xl font-semibold">จัดการไลฟ์</h1>
            </header>
        

        <div className="mt-6 flex gap-6">
            <aside className="w-1/4 bg-white rounded-lg shadow p-4">
                
                {liveBiddingItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className={`w-full p-3 text-left rounded-lg mb-2 ${selectedItem?.id === item.id ? "bg-green-100 font-semibold" : "bg-gray-100"}`}
                    >
                    {item.title}
                    </button>
                ))}

                <button className="w-full border-dashed border-2 border-gray-300 p-3 rounded-lg text-gray-500 mt-4">
                    + เพิ่มไลฟ์ใหม่
                </button>
            </aside>
        
        <main className="flex-1 ">
            {selectedItem ? (
                <>
                <div className="flex gap-6 bg-white rounded-lg shadow p-6">
                    <div className="w-1/3">
                        <img
                            src="image/shoes.png"
                            alt="Live Thumbnail"
                            className="w-full rounded-lg"
                        /> 
                    </div>
                    <div className="flex-1">
                        <p>ตัวอย่าง</p>
                        <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
                        
                    </div>
                </div>

                <form className="mt-6 space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-4 flex items-center gap-8">
                    <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
                        ชื่อไลฟ์ <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={selectedItem.title}
                        onChange={(e) => setSelectedItem({...selectedItem, title: e.target.value})}
                        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                        required
                      
                    />
                </div>

                <div className="mb-4 flex items-center gap-8">
                    <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
                        สินค้า <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={selectedItem.product}
                        onChange={(e) => setSelectedItem({...selectedItem, product: e.target.value})}
                        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                        required
                      
                    />
                </div>

                <div className="mb-4 flex items-center gap-8">
                    <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
                        เริ่มต้น <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={selectedItem.startDate}
                        onChange={(e) => setSelectedItem({...selectedItem, startDate: e.target.value})}
                        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                        required
                      
                    />
                </div>

                <div className="mb-4 flex items-center gap-8">
                    <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
                        สิ้นสุด <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={selectedItem.endDate}
                        onChange={(e) => setSelectedItem({...selectedItem, endDate: e.target.value})}
                        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                        required
                      
                    />
                </div>

                <div className="mb-4 flex items-center gap-8">
                    <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
                        สถานะ <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={selectedItem.status}
                        onChange={(e) => setSelectedItem({...selectedItem, status: e.target.value})}
                        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                        required
                     
                    />
                </div>

                <div className="mb-4 flex items-center gap-8">
                    <label className="block text-gray-700 font-medium mb-1 whitespace-nowrap">
                        ลิงก์ <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={selectedItem.link}
                        onChange={(e) => setSelectedItem({...selectedItem, link: e.target.value})}
                        className="block my-3 bg-gray-100 px-4 py-2 rounded-[8px] text-sm w-64"
                        required
                       
                        />
                </div>
                </div>
                

                <div className="flex gap-4">
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg">ลบ</button>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg">เริ่มทันที</button>
                  <button className="bg-gray-400 text-white py-2 px-4 rounded-lg">คัดลอกลิงก์</button>
                </div>
            </form>
            </>
            ) : (
                <p className="text-gray-500">เลือกไลฟ์เพื่อดูรายละเอียด</p>
            )}
        </main>
        </div>
        </div>
        </>
    );
}
