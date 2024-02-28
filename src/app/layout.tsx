import type { Metadata } from "next";
import Script from 'next/script'
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

  console.log(process.env.NEXT_PUBLIC_GA);

  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-2040517232009371"></meta>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040517232009371" crossOrigin="anonymous"></script>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
      />
            {/* gtag('config', ${process.env.NEXT_PUBLIC_GA}'G-N24CHGYB0M'); */}

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_GA});
        `}
      </Script>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
