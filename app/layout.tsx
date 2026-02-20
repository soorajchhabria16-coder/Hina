import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Hina Usman | Psychologist & Lecturer',
  description: 'Portfolio of Hina Usman',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#f8fafb] dark:bg-[#1a202c] text-[#1f2937] dark:text-[#e2e8f0] font-sans antialiased transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
