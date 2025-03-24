import ProductWraper from "@/components/ProductWraper";

interface Props {
  children: React.ReactNode;
}

export default function TrackingLayout({ children }: Props) {
  return <ProductWraper>{children}</ProductWraper>;
}
