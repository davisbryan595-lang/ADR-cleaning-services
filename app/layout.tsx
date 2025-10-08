"use client"

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense, useEffect } from "react"

// New imports
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "ADR Cleaning Service LLC | Dallas, TX",
  description:
    "Professional home cleaning, tailored for you. Serving Dallas, TX & surrounding areas.",
  generator: "v0.app",
  openGraph: {
    title: "ADR Cleaning Service LLC",
    description:
      "Professional home cleaning, tailored for you. Serving Dallas, TX & surrounding areas.",
    images: ["/logo.png"],
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADR Cleaning Service LLC",
    description:
      "Professional home cleaning, tailored for you. Serving Dallas, TX & surrounding areas.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // ✅ Smooth Scroll for all anchor links site-wide
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")!.substring(1)
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ADR Cleaning Service LLC",
    url: "https://example.com",
    logo: "/logo.png",
    image: "/logo.png",
    telephone: "+1 516-712-7244",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: "Dallas, TX and surrounding areas",
    openingHours: "Mo-Sa 08:00-18:00",
  }

  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Suspense>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
