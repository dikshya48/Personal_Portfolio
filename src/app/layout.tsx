import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/index.css';
import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: 'Portfolio | Designer & Developer',
  description: 'Minimal, modern portfolio showcasing design and development work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background">
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
