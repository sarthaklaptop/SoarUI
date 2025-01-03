import type { Metadata } from "next";
import { Cherry_Bomb_One, Climate_Crisis, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Demo/NavBar";
import { ThemeProvider } from "@/components/Demo/theme-provider";
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cherryBombOne = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cherry-bomb",
});
const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-climate-crisis",
});

export const metadata: Metadata = {
  title: "SoarUI - Tailwind Component Library",
  description:
    "SoarUI is a collection of beautiful, ready-to-use UI components built with Tailwind CSS and Next.js. Copy, paste, and build stunning applications effortlessly—no installation required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${climateCrisis.variable} ${cherryBombOne.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster/>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
