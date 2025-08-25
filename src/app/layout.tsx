import type { Metadata } from "next"

import "../styles/globals.css"

import { ThemeProvider } from "@/providers"

export const metadata: Metadata = {
  title: "Starter Project",
  description: "Next JS Starter Project",
  icons: {
    icon: ["/favicon.ico"],
    // icon: ['/favicon.ico?v=10'],
    // apple: [""],
    // shortcut: [""],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className="bg-background text-foreground font-sf_text flex flex-col gap-5 bg-cover bg-center p-4 md:gap-8 md:p-8 lg:gap-13 lg:px-6 lg:py-8 xl:gap-21 xl:px-20 xl:py-8"
          //   style={{ backgroundImage }}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
