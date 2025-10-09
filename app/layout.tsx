import type { Metadata } from 'next';
import Script from 'next/script';
import { DataProvider } from '../src/contexts/DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import '../src/sass/main.scss';
import './globals.css';

export const metadata: Metadata = {
    title: 'Nguyen Trung Hieu - Portfolio',
    description: 'Personal portfolio website of Trung Hieu (Elliot) Nguyen - Software Engineer',
    icons: {
        icon: '/favicon.ico',
        apple: '/logo192.png',
    },
    manifest: '/manifest.json',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://kit.fontawesome.com/3700045882.js"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <DataProvider>
                    {children}
                </DataProvider>
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://cdn.splitbee.io/sb.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}

