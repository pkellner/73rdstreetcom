import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "73rd Street Associates - Technology & Software Development Services",
  description: "Founded in 1991, 73rd Street Associates provides technology and software development services specializing in social media integration for content publishing and management.",
  keywords: "Software Development, Facebook Integration, Instagram Integration, Content Publishing, Technology Services",
  authors: [{ name: "Peter Kellner", url: "https://peterkellner.net" }],
  openGraph: {
    title: "73rd Street Associates - Technology & Software Development Services",
    description: "Professional technology services and social media integration since 1991",
    type: "website",
    locale: "en_US",
    url: "https://73rdstreet.com",
    siteName: "73rd Street Associates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}