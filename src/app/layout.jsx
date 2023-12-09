import '@/styles/styles.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className={roboto.className}>{children}</main>
      </body>
    </html>
  )
}
