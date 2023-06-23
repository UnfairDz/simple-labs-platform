import Header from './components/Header'
import './globals.css'

import { store } from "../redux/store";
import { Providers } from "@/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
