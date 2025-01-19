import "./globals.css";

export const metadata = {
  title: "Taisei's Portfolio",
  description:
    "Designed and developer focused on solving problems effectively and aesthetically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
