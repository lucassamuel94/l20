import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { archivo } from '@/lib/fonts'
import { cn } from '@/lib/utils'

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
          'min-h-screen bg-gray-50 font-sans antialiased',
          archivo.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}