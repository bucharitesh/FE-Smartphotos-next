import '../styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import ErrorBoundary from '@/components/ErrorBoundary';
import { useInternetConnection } from '@/utils/hooks';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isOffline = useInternetConnection();

  return (
    <ErrorBoundary>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {isOffline ? <div>No Internet Page</div> : <Component {...pageProps} />}
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default MyApp;
