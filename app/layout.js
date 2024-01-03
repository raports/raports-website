import { Inter } from 'next/font/google'
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raports - Ramis\'s portfolios',
  description: 'My portfolio website. A place where I show my projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='gradient'>
          {children}
        </div>
      </body>
    </html>
  )
}
