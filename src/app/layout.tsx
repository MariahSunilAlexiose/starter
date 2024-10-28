import type { Metadata } from "next";

import "../styles/globals.css";

import { Banner, Footer, Header } from "@/components";
import { Toasts } from "@/containers";
import { ThemeProvider, ToastProvider } from "@/providers";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <html lang="en">
          <body>
            <Header />
            <Banner
              title="GeneriCon 2023"
              description="Join us in Denver from June 7 – 9 to see what’s coming next."
              callToActionText="Register Now"
            />
            <Toasts />
            <div className="flex min-h-screen flex-col">{children}</div>
            <Footer />
          </body>
        </html>
      </ToastProvider>
    </ThemeProvider>
  );
}
