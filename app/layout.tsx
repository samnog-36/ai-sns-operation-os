import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI口コミ運用OS',
  description: '広告代理店向けAI SNS運用管理システム',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
