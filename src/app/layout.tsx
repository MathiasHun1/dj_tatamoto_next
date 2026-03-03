import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../theme';
import type { Metadata } from 'next';
import './globals.scss';
import { jsonLD } from '@/jsonLD';
import Script from 'next/script';

import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
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
    <html lang="hu" className={`${roboto.variable} `}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD),
          }}
        />
        <link rel="icon" href="/DJTata_logo_clipped.svg" type="image/x-icon" sizes="any" />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1601443591080405');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body>
        <noscript><img height="1" width="1" style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1601443591080405&ev=PageView&noscript=1"
        /></noscript>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box component="main">{children}</Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>

        <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/9fdf0b420c114cd8c060c3aa/script.js" strategy="beforeInteractive" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F2LEWZGS9T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });
        gtag('js', new Date());
        gtag('config', 'G-F2LEWZGS9T', { 'anonymize_ip': true });
      `}
        </Script>
        
      </body>
    </html>
  );
}
