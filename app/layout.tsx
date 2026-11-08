import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GridBackground } from "@/components/GridBackground";
import { FloatingMenu } from "@/components/FloatingMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oscar-rojas.dev"),
  title: "Oscar Rojas · Director of Technology & Software Engineer",
  description:
    "Portfolio of Oscar Rojas: Director of Technology at Immaculata-La Salle High School, founder of OER Consulting, and a software engineer who builds and ships production systems.",
  openGraph: {
    title: "Oscar Rojas",
    description:
      "Portfolio of Oscar Rojas: Director of Technology at Immaculata-La Salle High School, founder of OER Consulting, and a software engineer who builds and ships production systems.",
    url: "https://oscar-rojas.dev",
    siteName: "Oscar Rojas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Rojas",
    description:
      "Portfolio of Oscar Rojas: Director of Technology at Immaculata-La Salle High School, founder of OER Consulting, and a software engineer who builds and ships production systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-cream dark:bg-charcoal text-charcoal dark:text-cream antialiased">
        <ThemeProvider>
          <GridBackground />
          <main className="relative z-10 flex-1">{children}</main>
          <FloatingMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
