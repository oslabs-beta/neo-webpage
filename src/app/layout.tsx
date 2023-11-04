import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEO',
  description: 'NEO Webpage',
  icons: {
    icon: ['/favicon_io/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/favicon_io/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth text-[whitesmoke] bg-black bg-gradient-to-t from-indigo-800/25 via-black to-indigo-800/25' lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
