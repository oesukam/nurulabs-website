import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nuru Labs Ltd - Software Solutions in Rwanda",
    template: "%s | Nuru Labs Ltd",
  },
  description:
    "Leading IT company in Rwanda building innovative software solutions including Jambo, the premier gym management platform. Custom software development, web applications, and PaaS solutions.",
  keywords: [
    "IT company Rwanda",
    "software development Rwanda",
    "Jambo gym management",
    "PaaS Rwanda",
    "custom software Rwanda",
    "web development Rwanda",
    "Nuru Labs",
    "gym management software",
    "fitness management platform",
  ],
  authors: [{ name: "Nuru Labs Ltd" }],
  creator: "Nuru Labs Ltd",
  publisher: "Nuru Labs Ltd",
  metadataBase: new URL("https://nurulabs.rw"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://nurulabs.rw",
    title: "Nuru Labs Ltd - Software Solutions in Rwanda",
    description:
      "Leading IT company in Rwanda building innovative software solutions including Jambo, the premier gym management platform.",
    siteName: "Nuru Labs Ltd",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nuru Labs Ltd - Software Solutions in Rwanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuru Labs Ltd - Software Solutions in Rwanda",
    description:
      "Leading IT company in Rwanda building innovative software solutions including Jambo, the premier gym management platform.",
    images: ["/og-image.png"],
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
