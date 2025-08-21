import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Rajdhani } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Nexora - The Ultimate Roblox Utility",
  description: "Level 8 Internal Executor with 98% UNC/SUNC compatibility. The most advanced Roblox utility available.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${rajdhani.style.fontFamily};
  --font-sans: ${rajdhani.variable};
  --font-mono: ${orbitron.variable};
}
        `}</style>
      </head>
      <body className={`${rajdhani.variable} ${orbitron.variable} antialiased`}>{children}</body>
    </html>
  )
}
