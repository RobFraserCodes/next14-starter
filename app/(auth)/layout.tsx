import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { siteInfo } from '@/data/site-details'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import '../globals.css'
import ClientProviders from '@/components/client-providers'
import Header from '@/components/header'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import { Analytics } from '@/lib/analytics'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <ClientProviders>
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider 
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
    </ClientProviders>
  )
}