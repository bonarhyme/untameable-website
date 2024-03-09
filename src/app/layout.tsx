import type { Metadata, Viewport } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#111B2B',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: 'Untameable',
  description:
    'Build great Developer and User Experiences for digital products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
