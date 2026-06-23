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
  title: "Oscar Rojas — Data & Software Engineer",
  description:
    "Portfolio of Oscar Rojas, a data engineer specializing in Python, dbt, and SQL.",
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
