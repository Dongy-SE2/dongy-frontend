import ProductWraper from "@/components/ProductWraper";

interface Props {
  children: React.ReactNode;
}
export default function ManageLayout({ children }: Readonly<Props>) {
  return <ProductWraper>{children}</ProductWraper>;
}
