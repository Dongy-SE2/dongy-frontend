interface Props {
  children: React.ReactNode;
}
export default function ProductLayout({ children }: Readonly<Props>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
