"use client";
import "./globals.css";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { CursorProvider } from "./components/cursorContext/CursorContext";
import CustomCursor from "./components/utils/CustomCursor";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata = {
  title: "Taisei's Portfolio",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  description:
    "Designed and developer focused on solving problems effectively and aesthetically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.className}`}>
        <CursorProvider>
          {children}
          <CustomCursor />
        </CursorProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="708d989a-acf2-4dce-bff3-1e1c53f201be"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
