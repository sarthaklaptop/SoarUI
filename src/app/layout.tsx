import type { Metadata } from "next";
<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import NavBar from "@/components/NavBar";
=======
import {
  Geist,
  Geist_Mono,
  Cherry_Bomb_One,
  Climate_Crisis,
} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
>>>>>>> e3a68ec (Updared Theme to ShadCN Next theme)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

<<<<<<< HEAD
=======
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

>>>>>>> e3a68ec (Updared Theme to ShadCN Next theme)
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
<<<<<<< HEAD
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ClientThemeWrapper>
            <NavBar/>
            {children}
          </ClientThemeWrapper>
        </ThemeProvider>
=======
        className={`${geistSans.variable} ${geistMono.variable} ${cherryBombOne.variable} ${climateCrisis.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>

        {/* {children} */}
>>>>>>> e3a68ec (Updared Theme to ShadCN Next theme)
      </body>
    </html>
  );
}
