import type { Metadata } from "next";
import { instrumentSans } from "./ui/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkShare",
  description: "A link sharing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
