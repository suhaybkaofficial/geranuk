import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Geranuk | Leading e-Commerce In UAE',
  description: 'Geranuk | Leading e-Commerce In UAE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container mx-auto'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
