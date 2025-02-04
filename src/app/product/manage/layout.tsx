interface Props {
  children: React.ReactNode;
}
export default function ManageLayout({ children }: Readonly<Props>) {
  return <>{children}</>;
}
