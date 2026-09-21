import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SiteLayout from "@/components/layout/SiteLayout";
import "./globals.css";
import ChatWidget from "@/components/shared/ChatWidget";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alpinedigitalschool.edu.pk"),
  alternates: {
    canonical: "/",
  },

  title: {
    default: "Vivekananda Central School",
    template: "%s | Vivekananda Central School",
  },
  description:
    "Vivekananda Central School provides quality education through modern classrooms, experienced faculty, digital learning, character building, and academic excellence.",
  keywords: [
    "Vivekananda Central School",
    "School in Pakistan",
    "Best School",
    "Digital School",
    "Private School",
    "Primary School",
    "Secondary School",
    "Education",
    "Admissions",
    "Quality Education",
    "Modern Education",
    "School Website",
  ],
  authors: [{ name: "Vivekananda Central School" }],
  creator: "Vivekananda Central School",
  publisher: "Vivekananda Central School",

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vivekananda Central School | A Digital Futuristic School",
    description:
      "A modern institution committed to academic excellence, innovation, and character development.",
    type: "website",
    url: "https://www.alpinedigitalschool.edu.pk",
    locale: "en_US",
    siteName: "Vivekananda Central School",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vivekananda Central School",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivekananda Central School",
    description:
      "Empowering students through innovation, excellence, and modern education.",

    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <SiteLayout>{children}</SiteLayout>
        <Toaster position="top-right" />
        <SiteLayout>{children}</SiteLayout>
        <Toaster position="top-right" />
        <ChatWidget />
        <StructuredData />
      </body>
    </html>
  );
}
