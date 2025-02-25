import getProductInfo from "@/app/api/product/getProductInfo";

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
            <h1 className="flex place-content-evenly ">
            </h1>
            
            {/* Cards Container */}
            <div className="flex justify-center">
            {/* Left: Product Image Card */}
            <div className="relative px-9">
                {/* Top Left: Image Card */}
                <div className="relative w-[385px] h-[221px]">
                {/* Live condition */}

                </div>

                {/* product status condition*/}
                <div className="w-[385px] h-[144px] mt-4 p-4 bg-white rounded-lg shadow text-center">
                
                </div>
            </div>

            {/* Right: Product Detail Card */}

            <div className="w-[428px] h-[393px] bg-white p-6 rounded-lg shadow-lg">
                
            </div>
            </div>
        </div>
    );
    }
