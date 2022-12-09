'use client';

import { AppConfig } from '@/utils/AppConfig';
import { useInternetConnection } from '@/utils/hooks';
import '@/styles/global.css';
import localFont from '@next/font/local';

const gilroy = localFont({
  src: [
    {
      path: '../fonts/gilroy/Gilroy-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-UltraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../fonts/gilroy/Gilroy-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy/Gilroy-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-gilroy',
});

const manrope = localFont({ src: '../fonts/manrope/manrope-var.ttf', variable: '--font-manrope' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isOffline = useInternetConnection();

  return (
    <html lang={AppConfig.locale}>
      <head />
      <body className={`${manrope.className} ${gilroy.className} w-screen overflow-x-hidden`}>
        {isOffline ? <div>No Internet Page</div> : children}
      </body>
    </html>
  );
}
