import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { siteInfo } from '@/data/site-details'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import Header from '@/components/header'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: '%s | ' + siteInfo.name,
  },
  description: siteInfo.description,
  keywords: siteInfo.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider 
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
