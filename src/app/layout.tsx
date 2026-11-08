import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Cinzel, Figtree } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

/** The GM brand serif (logo option 4A): the lobby's wordmark and headings. */
const cinzel = Cinzel({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-brand",
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
  themeColor: "#0E1A2B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${cinzel.variable} ${figtree.variable} h-dvh overflow-hidden bg-[#0E1A2B] antialiased`}
    >
      <body className={`${figtree.className} flex h-dvh flex-col overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
