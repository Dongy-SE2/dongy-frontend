import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}
export default function LoginLayout({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
