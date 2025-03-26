import { Product } from "@/app/api/product/getProductList";
import Image from "next/image";
import Link from "next/link";

interface SearchProductCardProps {
  searchProduct: Product;
}

function SearchProductCard(props: SearchProductCardProps) {
  const { searchProduct } = props;

  return (
    <Link
      href={`/product/${searchProduct.id}`}
      className="relative w-60 h-44 rounded-xl bg-white shadow-sm"
    >
      <div className="rounded-md overflow-hidden border shadow-sm w-[250px] h-[180px] bg-white">
        <Image
          src={searchProduct.image}
          alt="image placeholder"
          width={200}
          height={200}
          className="w-full h-[140px] object-cover"
        />
        <div className="p-2 flex justify-between items-center overflow-hidden">
          <h3 className="text-[16px] font-semibold text-black truncate max-w-[150px]">
            {searchProduct.name}
          </h3>
          <span className="text-gray-500 text-sm flex-shrink-0">
            {searchProduct.minPrice} ฿
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SearchProductCard;

