import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { beVietnamPro } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import Footer from '@/components/footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen overflow-x-hidden bg-black font-sans font-normal text-white antialiased',
          beVietnamPro.variable,
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
