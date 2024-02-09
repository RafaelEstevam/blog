import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Estevam",
  description: "Blog pessoal sobre desenvolvimento web",
  authors: [{ name: "Rafael Estevam de Oliveira", url: "https://github.com/RafaelEstevam" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-2040517232009371"></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040517232009371" crossOrigin="anonymous"></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
