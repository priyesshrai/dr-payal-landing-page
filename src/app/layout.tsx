import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Dr. Payal Bajaj - Medical Director And Senior IVF Consultant",
  description: "Dr. Payal Bajaj - Medical Director And Senior IVF Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"></link>
      </head>
      <body>
        {children}
        <Script src="https://static.elfsight.com/platform/platform.js" async />
      </body>
    </html>
  );
}
