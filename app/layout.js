import { Open_Sans } from 'next/font/google'
import '@/app/ui/globals.css';
import Navbar from '@/app/ui/Navbar';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Raports - Ramis\'s portfolio',
  description: 'Ramis Khasianov\'s portfolio website. A place where to show projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
