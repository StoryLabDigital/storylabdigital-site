import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const siteUrl = "https://www.storylabdigital.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "StoryLabDigital | Ideas Worth Remembering",
    template: "%s | StoryLabDigital",
  },

  description:
    "StoryLabDigital is an independent creative studio creating ideas worth remembering through film, animation, AI-assisted production and digital experiences.",

  applicationName: "StoryLabDigital",

  authors: [
    {
      name: "StoryLabDigital",
      url: siteUrl,
    },
  ],

  creator: "StoryLabDigital",
  publisher: "StoryLabDigital",

  category: "Creative Studio",

  keywords: [
    "StoryLabDigital",
    "independent creative studio",
    "creative studio Cape Town",
    "visual storytelling",
    "animation studio",
    "AI video production",
    "corporate video production",
    "digital experiences",
    "Ideas Worth Remembering",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "StoryLabDigital",
    title: "StoryLabDigital | Ideas Worth Remembering",
    description:
      "Independent Creative Studio. Different. On Purpose.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StoryLabDigital — Ideas Worth Remembering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StoryLabDigital | Ideas Worth Remembering",
    description:
      "Independent Creative Studio. Different. On Purpose.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {},

  other: {
    "theme-color": "#f7f7f5",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f7f7f5",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0b0f17",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="sld-skip-link">
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}