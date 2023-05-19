import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/Material';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanu Islam',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
