import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Northcrow",
  description:
    "Building connections between customers and service providers.",
  metadataBase: new URL("https://northcrow.co.uk"),

  openGraph: {
    title: "Northcrow",
    description:
      "Building connections between customers and service providers.",
    url: "https://northcrow.co.uk",
    siteName: "Northcrow",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Northcrow",
    description:
      "Building connections between customers and service providers.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}