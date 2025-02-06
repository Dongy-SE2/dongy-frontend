import { Pen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  minPrice: number;
  id: string;
}

const ProductCard: React.FC<Props> = ({ name, image, id, minPrice }) => {
  return (
    <>
      <div className="relative w-60 h-44 rounded-xl bg-white shadow-sm">
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
        <div className="inline-flex absolute right-1 top-0">
          <div className="p-1.5 bg-white rounded-full mr-1 mt-2">
            <Trash2 width="16" height="16" />
          </div>
          <Link
            href={`/product/manage/${id}`}
            className="p-1.5 bg-white rounded-full mr-1 mt-2"
          >
            <Pen width="16" height="16" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
