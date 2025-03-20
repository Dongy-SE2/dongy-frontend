import { ArrowLeft as LucideArrowLeft } from "lucide-react";

type ArrowLeftProps = {
  size?: number;
};

export function ArrowLeft({ size = 24 }: ArrowLeftProps) {
  return <LucideArrowLeft size={size} className="text-gray-700 hover:text-gray-900" />;
}