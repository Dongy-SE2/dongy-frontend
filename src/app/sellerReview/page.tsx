"use client"
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent} from "@/components/ui/card";
import MovebackButton from "@/components/MovebackButton";
import SellerInfo from "@/components/SellerInfo";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import { sellerReviewAPI } from "../api/sellerReview/sellerReviewAPI";
import { useState, useEffect } from "react";
import { sellerReview } from "../api/sellerReview/sellerReview";


const reviews = [
  { name: "คุณ", rating: 4, comment: "Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet..." },
  { name: "วสุธี ดิสสานนท์", rating: 4, comment: "Lorem ipsum dolor sit amet..." },
  { name: "วสุธี ดิสสานนท์", rating: 5, comment: "Lorem ipsum dolor sit amet..." },
];

function SellerReviewPage() {

    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState<sellerReview[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [sellerName, setSellerName] = useState("วสุพล ดิสสานนท์");
    // const [searchText, setSearchText] = useState('');
    // const [response, setResponse] = useState(null);

  useEffect(() => {
    async function loadSearchProducts() {
        setLoading(true)
        try{
          const data = await sellerReviewAPI.get(sellerName)
          //setResponse(data);
          setReviews(data)
        } catch(e) {
            if(e instanceof Error) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }
    loadSearchProducts();
}, [])

// const handleSearch = async (e: any) => {
//     e.preventDefault();
//     setLoading(true)
//     try{
//       const data = await searchProductAPI.get(searchText)
//       //setResponse(data);
//       setSearchProducts(data)
//     } catch(error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false)
//     }
// }



  return (

    // <>

    // {error && (
    //     <div className="row">
    //       <div className="card large error">
    //         <section>
    //           <p>
    //             <span className="icon-alert inverse "></span>
    //             {error}
    //           </p>
    //         </section>
    //       </div>
    //    </div>
    //  )}
     
    // <form onSubmit={handleSearch}>

    // <label> search </label>
    // <input type="text"
    // placeholder="ค้นหาสินค้า"
    // onChange={(e) => setSearchText(e.target.value)}></input>
    // <button>submit</button>

    // </form>
     

    // <SearchProductList searchProducts={searchProducts} />

    // {!loading && !error && (
    //     true
    // )}

    // {loading && (
    //     <div className="center-page">
    //       <span className="spinner primary"></span>
    //       <p>Loading...</p>
    //     </div>
    //   )}
    // </>

    
    <div className="min-h-screen bg-gradient-to-b from-[#E6F6F1] to-[#F6F7F9] p-6 py-14">
      <div className="w-3/5 mx-auto">
        
        <div className="flex">
        <h1 className="text-3xl font-bold mb-4">รีวิวผู้ขาย</h1>
        <span className="ml-auto"><MovebackButton href="login"/></span>
        </div>

        <div className="flex  py-8 gap-10">

        <div className="flex flex-col w-1/2 gap-3">
        <SellerInfo sellerName="วสุพล ดิสสานนท์"/>
        
        <ReviewForm/>
        </div>

       
        
        <div className="w-1/2 items-center justify-center overflow-y-auto max-h-[527px]">
          <ReviewList reviews={reviews} />
        </div>
       
      </div>
    </div>
    </div>
  );
}

export default SellerReviewPage
