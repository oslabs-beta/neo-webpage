import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Engine Optimization',
  description:
    'The home page for Next Engine Optimization, otherwise known as NEO, NEO is a VSCode extension for Next.js developers to optimize their search engine optimization or SEO during the development process',
  icons: {
    icon: ['/favicon_io/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/favicon_io/site.webmanifest',
  verification: {
    google: 'JtZ4NT9mZbed9leTdRQr2zYJI-tx-G1cotM9QJlyA5U',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="scroll-smooth text-[whitesmoke] bg-black bg-gradient-to-t from-indigo-800/25 via-black to-indigo-800/25"
      lang="en"
    >
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
