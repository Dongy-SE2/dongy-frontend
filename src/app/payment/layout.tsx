import ProductWraper from "@/components/ProductWraper";

interface Props {
  children: React.ReactNode;
}
export default function PaymentLayout({ children }: Props) {
  return <ProductWraper>{children}</ProductWraper>;
}
