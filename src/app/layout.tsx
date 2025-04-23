import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ibmPlex = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--ibm-plex-thai",
  subsets: ["thai", "cyrillic-ext", "latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Dongy Bitkub",
  description: "Bit for goods, bit for life",
  icons: {
    icon: ["/favicon-32x32.png"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlex.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
