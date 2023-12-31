import "./globals.css"
import { Inter, Kanit } from "next/font/google"
import Navbar from "./ui/(main)/navbar"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { Providers } from "@/redux/provider"

import StyledComponentsRegistry from './registry'
config.autoAddCss = false

// const inter = Inter({ subsets: ["latin"] })
const kanit = Kanit({ subsets: ["latin"], weight: "600" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
