import "./globals.css";
import { Outfit } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
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
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="708d989a-acf2-4dce-bff3-1e1c53f201be"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
