import type { Metadata } from "next";
import { Merriweather, Source_Serif_4 } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
