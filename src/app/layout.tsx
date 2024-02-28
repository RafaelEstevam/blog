import type { Metadata } from "next";
import Script from 'next/script'
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

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

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N24CHGYB0M"
      />

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N24CHGYB0M');
        `}
      </Script>
      
      {/* <body className="bg-gradient-to-b from-slate-800 to-neutral-900"> */}
      <body className={cn(
          "bg-gradient-to-b dark:from-slate-800 dark:to-neutral-900",
          fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
