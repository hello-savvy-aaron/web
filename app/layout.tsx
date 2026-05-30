import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hellosavvy.design"),
  title: {
    default: "HelloSavvy — Custom solutions, transparently built",
    template: "%s · HelloSavvy",
  },
  description:
    "Enterprise-class standards, built for your scale. Start with Blueprints for under $500.",
  openGraph: {
    title: "HelloSavvy — Custom solutions, transparently built",
    description:
      "Enterprise-class standards, built for your scale. Start with Blueprints for under $500.",
    url: "https://hellosavvy.design",
    siteName: "HelloSavvy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HelloSavvy — Custom solutions, transparently built",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelloSavvy — Custom solutions, transparently built",
    description:
      "Enterprise-class standards, built for your scale. Start with Blueprints for under $500.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
