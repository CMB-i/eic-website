import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShellController, TopPillBarWrapper } from "@/components/shell/ShellController";
import { MotionProvider } from "@/components/motion/MotionProvider";

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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash: apply persisted theme before React hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var t = localStorage.getItem('eic.theme');
                  var theme = (t === 'light' || t === 'dark') ? t :
                    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.dataset.theme = theme;
                  
                  // Initialize sidebar width CSS variable (defaults to expanded 280px on desktop, 0px on mobile).
                  var isMobile = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
                  var sidebarW = isMobile ? '0px' : '280px';
                  document.documentElement.style.setProperty('--sidebar-w', sidebarW);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen">
          <div className="flex min-h-screen">
            {/* Client-only chrome (Sidebar, TopPillBar, drawer) - does NOT wrap children. */}
            <ShellController />
            {/* Server-rendered content with layout offset via CSS variable. */}
            <div className="min-w-0 flex-1">
              <TopPillBarWrapper />
              <main className="px-5 pb-16 pt-8 md:px-8 lg:px-10">
                <MotionProvider>{children}</MotionProvider>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
