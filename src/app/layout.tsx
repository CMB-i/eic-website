import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Footer } from "@/components/shell/Footer";
import { Navbar } from "@/components/shell/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EIC — Entrepreneurship & Innovation Cell",
    template: "%s — EIC",
  },
  description: "EIC (Entrepreneurship & Innovation Cell) — futuristic, production-grade website template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash: apply persisted theme before React hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var t = localStorage.getItem('eic.theme');
                  var theme = (t === 'light' || t === 'dark') ? t : 'light';
                  document.documentElement.dataset.theme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen">
          <Navbar />
          <main className="px-5 pb-16 pt-0 md:px-8 lg:px-10">
            <MotionProvider>{children}</MotionProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
