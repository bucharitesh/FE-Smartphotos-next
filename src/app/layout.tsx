'use client';

import { AppConfig } from '@/utils/AppConfig';
import { useInternetConnection } from '@/utils/hooks';
import '@/styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isOffline = useInternetConnection();

  return (
    <html lang={AppConfig.locale}>
      <head />
      <body>{isOffline ? <div>No Internet Page</div> : children}</body>
    </html>
  );
}
