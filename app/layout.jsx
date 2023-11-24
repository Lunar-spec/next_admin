import { Poppins } from 'next/font/google'
import './ui/globals.css'

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ['latin']
})

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}