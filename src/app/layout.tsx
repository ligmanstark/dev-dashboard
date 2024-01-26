import ReduxProvider from '@/store/Provider';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
const inter = Roboto_Mono({ subsets: ['greek'] });

export const metadata: Metadata = {
  title: 'Developers Dashboard',
  description: 'Service for search github users'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
