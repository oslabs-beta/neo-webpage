import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEO',
  description: 'NEO Webpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-t from-indigo-800/25 via-black to-purple-800/25`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
