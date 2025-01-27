import "./globals.css";
import { Outfit } from "next/font/google";
import Head from "next/head";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata = {
  title: "Taisei's Portfolio",
  description:
    "Designed and developer focused on solving problems effectively and aesthetically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="708d989a-acf2-4dce-bff3-1e1c53f201be"
        ></script>
      </Head>
      <body className={`antialiased ${outfit.className}`}>{children}</body>
    </html>
  );
}
