import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { LanguageProvider } from "@/components/LanguageProvider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const interDisplay = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
  axes: ["opsz"],
  style: ["normal"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bold Innovation - Transformacja Cyfrowa",
  description: "Wyprzedź konkurencję dzięki zaawansowanej automatyzacji opartej na sztucznej inteligencji.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${interDisplay.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
