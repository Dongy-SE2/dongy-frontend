import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

interface SellerName {
  sellerName : string
}



function SellerInfo({sellerName}: SellerName){
 return(
    <Card className=" flex items-center p-4 mb-6 h-24">
            <div className="">
              <Avatar className="w-12 h-12 mr-4">
              <AvatarImage src="/image/ProfilePicture.jpg" alt="image holder"/>
              </Avatar>
            </div>
            <div className="">
              <p className="font-bold">{sellerName}</p>
              <div className="flex items-center text-orange-500 text-sm bg-yellow-100 rounded-md w-1/2 justify-center">
                <Star size={16} fill="currentColor"  />
                <span className="ml-1">4.6</span>
              </div>
            </div>
          </Card>
 );
}

export default SellerInfo