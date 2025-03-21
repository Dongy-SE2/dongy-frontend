interface Props {
  children: React.ReactNode;
}
export default function OrderLayout({ children }: Readonly<Props>) {
  return (
    <>
      <>{children}</>
    </>
  );
}
