import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.storylabdigital.co.za"),
  title: "StoryLabDigital | Visual Storytelling for Business",
  description:
    "We turn business stories and complex ideas into cinematic video content that people actually understand and remember.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "StoryLabDigital",
    description:
      "We turn business stories and complex ideas into cinematic video content that people actually understand and remember.",
    url: "https://www.storylabdigital.co.za",
    siteName: "StoryLabDigital",
    images: [
      {
        url: "https://www.storylabdigital.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StoryLabDigital | Visual Storytelling for Business",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryLabDigital",
    description:
      "We turn business stories and complex ideas into cinematic video content that people actually understand and remember.",
    images: ["https://www.storylabdigital.co.za/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}