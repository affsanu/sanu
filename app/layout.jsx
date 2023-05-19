import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/Material';
import TopNav from './components/layouts/TopNav';
import Footer from './components/layouts/Footer';
import { Providers } from './redux/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanu Islam',
  description: 'Personal Portfolio of Sanu Islam',
  keywords: "sanu, Sanu Islam, Saidpur, Md Sanu, Md Sanu Islam, Saidpur News, Syedpur News, Saidpur Plaza, News Saidpur",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
            <TopNav />
            {children}
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
