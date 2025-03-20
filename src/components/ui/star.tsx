import { Star as LucideStar } from "lucide-react";

type StarProps = {
  size?: number;
  filled?: boolean;
};

export function Star({ size = 16, filled = false }: StarProps) {
  return <LucideStar size={size} className={filled ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />;
}