import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto, Playpen_Sans } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../theme';
import type { Metadata } from 'next';
import './globals.css';
import { jsonLD } from '@/jsonLD';

import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const playpenSans = Playpen_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playpenSans',
});

export const metadata: Metadata = {
  title: 'Dj Tatamoto - esküvő - rendezvény',
  description: 'Profi Dj esküvőre, rendezvényre, céges bulira, privát bulira',
  keywords: 'dj, eskuvo dj, rendezveny dj',
  robots: {
    index: true, // allow indexing
    follow: true, // allow following links
  },
  openGraph: {
    title: 'Dj Tatamoto - esküvő - rendezvény',
    description: 'Profi Dj esküvőre, rendezvényre, céges bulira, privát bulira',
    siteName: 'Profi Dj esküvőre, rendezvényre, céges bulira, privát bulira',
    url: 'https://djtatamoto.hu',
    images: [
      {
        url: 'https://djtatamoto.hu/hero2.jpg',
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${roboto.variable} ${playpenSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD),
          }}
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box component="main">{children}</Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
