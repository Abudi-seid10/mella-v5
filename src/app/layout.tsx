import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Mella Counseling Center | Professional Mental Health Services',
  description: 'Mella Counseling Center offers professional therapy, counseling, and personalized care to help you heal and grow. Virtual counseling, art therapy, and more.',
  keywords: 'counseling, therapy, mental health, art therapy, virtual counseling, Ethiopia, Mella',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning={true}>
      <body className={`${inter.variable} relative`} suppressHydrationWarning={true}>
        {/* Decorative top border with rose-red and teal-blue */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-red to-teal-blue"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
