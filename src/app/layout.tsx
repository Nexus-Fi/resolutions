import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';
import Navbar from 'src/components/Navbar';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Resolutions by NexusFi',
  description: 'Onchain activity tracker for your resolutions',
  openGraph: {
    title: 'Resolutions by NexusFi',
    description: 'Onchain activity tracker for your resolutions',
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html>
      <body className="w-full">

        <OnchainProviders>
          {/* <Navbar /> */}
          {children}
        </OnchainProviders>
      </body>
    </html>
  );
}
