import type { Metadata } from "next"
import "./globals.css"
import { ReduxProvider } from "../store/ReduxProvider"
import { MuiProvider } from "../components/MuiProvider"

export const metadata: Metadata = {
  title: "My Products App",
  description: "Gestión de productos con Next.js, Redux y MUI",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <MuiProvider>{children}</MuiProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
