import { Card , CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Pencil, Trash } from "lucide-react";
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <Card className="relative w-72 rounded-2xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="absolute top-2 right-2 flex space-x-2">
        <Button size="icon" variant="ghost">
          <Trash className="w-5 h-5 text-gray-600" />
        </Button>
        <Button size="icon" variant="ghost">
          <Pencil className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{price} ฿</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
