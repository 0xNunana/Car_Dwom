import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'




export const metadata = {
  title: 'Car Dwom',
  description: 'No.1 Car Finder in Ghana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
