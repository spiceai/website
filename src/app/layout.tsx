import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spice.ai",
  description:
    "Composable, ready-to-use data and AI infrastructure pre-loaded with web3 data. Accelerate development of the next generation of intelligent software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
