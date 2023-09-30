import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // 1 hr

export const metadata: Metadata = {
  title: 'Next.js Image Gallery',
  description: 'Net Ninja tutorial series by Dave Gray',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='max-w-6xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}
