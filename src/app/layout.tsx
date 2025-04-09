import type { Metadata } from "next";
import { Merriweather, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-merriweather',
});

const sourceSerif = Source_Serif_4({ 
  weight: ['400', '600'],
  subsets: ["latin"],
  variable: '--font-source-serif',
});

export const metadata: Metadata = {
  title: "Hermetic Principles",
  description: "A journey through the Seven Hermetic Principles",
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hermetic Principles",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${sourceSerif.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
