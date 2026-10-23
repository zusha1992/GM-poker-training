import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Figtree } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const figtree = Figtree({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "GM Poker Training",
  description:
    "A Duolingo-style poker trainer that drills whole hand-ranges as groups, preflop through the river.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0F1317",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${figtree.variable} h-dvh overflow-hidden bg-[#0F1317] antialiased`}
    >
      <body className={`${figtree.className} flex h-dvh flex-col overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
