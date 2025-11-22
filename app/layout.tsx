import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Adding luxury serif font for headings and modern sans-serif
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })

export const metadata: Metadata = {
  title: "Ventus Noble - Luxury Fragrance",
  description: "Discover the essence of nobility. Ventus Noble luxury perfume for the discerning individual.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
