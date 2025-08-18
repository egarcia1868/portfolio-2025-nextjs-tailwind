import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Garcia",
  description: "Homepage/portfolio of Eric Garcia, a full-stack developer.",
  icons: {
    icon: "projects/EG-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-hydration theme fix: default to dark, then respect saved theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = 'dark'; // <- your chosen default
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    // If localStorage is unavailable, fall back to dark
    document.documentElement.classList.add('dark');
  }
})();
`,
          }}
        />
      </head>
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} ` +
          // keep transitions subtle to avoid visible flash
          `antialiased transition-colors ` +
          // light styles
          `bg-white text-black ` +
          // dark styles
          `dark:bg-gray-900 dark:text-white`
        }
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
