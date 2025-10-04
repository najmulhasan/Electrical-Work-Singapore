import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Professional Electrical Services Singapore | Licensed Electricians",
    template: "%s | Ask Engineering & Pte Ltd"
  },
  description: "Professional electrical services in Singapore. Licensed electricians for residential, commercial & industrial projects. 24/7 emergency service, installation, maintenance & repairs.",
  keywords: ["electrical services singapore", "licensed electrician singapore", "electrical installation", "electrical maintenance", "emergency electrician", "commercial electrical", "residential electrical"],
  authors: [{ name: "Ask Engineering & Pte Ltd" }],
  creator: "Ask Engineering & Pte Ltd",
  publisher: "Ask Engineering & Pte Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://powertech-electrical-sg.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://powertech-electrical-sg.com",
    title: "Professional Electrical Services Singapore | Licensed Electricians",
    description: "Professional electrical services in Singapore. Licensed electricians for residential, commercial & industrial projects. 24/7 emergency service.",
    siteName: "Ask Engineering & Pte Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ask Engineering & Pte Ltd - Professional Electrical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Electrical Services Singapore | Licensed Electricians",
    description: "Professional electrical services in Singapore. Licensed electricians for residential, commercial & industrial projects. 24/7 emergency service.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              "name": "Ask Engineering & Pte Ltd",
              "description": "Professional electrical services in Singapore. Licensed electricians for residential, commercial & industrial projects.",
              "url": "https://powertech-electrical-sg.com",
              "telephone": "+6586439469",
              "email": "askengineeringpteltd@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Electrical Street",
                "addressLocality": "Singapore",
                "postalCode": "123456",
                "addressCountry": "SG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "1.3521",
                "longitude": "103.8198"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Singapore"
              },
              "serviceType": [
                "Electrical Installation",
                "Electrical Maintenance",
                "Emergency Electrical Services",
                "Commercial Electrical",
                "Residential Electrical"
              ],
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
