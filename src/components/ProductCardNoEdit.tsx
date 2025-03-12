"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  minPrice: number;
  subId: string;
  id: string;
}

const ProductCardNoEdit: React.FC<Props> = ({
  name,
  subId,
  image,
  minPrice,
}) => {
  return (
    <Link
      href={`/product/${subId}`}
      className="relative w-60 h-44 rounded-xl bg-white shadow-sm"
    >
      <Image
        alt="product_image"
        src={image}
        width="400"
        height="400"
        className="w-full h-32 object-cover rounded-t-xl"
      />
      <div className="py-2 px-4 inline-flex justify-between w-full">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-400 text-sm item-center text-right content-center">
          {minPrice} ฿
        </p>
      </div>
    </Link>
  );
};

export default ProductCardNoEdit;
