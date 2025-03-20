import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

function ReviewForm(){
    return(
        <div className="">
          <h2 className="font-bold mb-6 text-2xl">แสดงความคิดเห็น</h2>
          <form >
            <Card className="p-4 mb-6 h-full">
              <p className="mb-2">
                คะแนน
                <span className="text-red-500">*</span>
              </p>
            <div className="flex mb-2 ">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} fill="currentColor" className={i <= 3 ? "text-orange-500" : "text-gray-300"} />
              ))}
            </div>
            <div className="mt-6">
              <p >ความคิดเห็น</p>
              <textarea placeholder="" className="mt-4 mb-2 bg-gray-100 w-full h-24 rounded-md shadow-sm resize-none p-2" />
            </div>
            <div className="flex justify-center ">
              <Button className=" bg-gray-600 text-white mt-4 w-32 mb-5">ส่ง</Button>
            </div>
        </Card>
        </form>
        </div>
    );
}

export default ReviewForm