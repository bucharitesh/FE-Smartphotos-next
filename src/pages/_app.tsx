import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { GlobalProvider } from '@/context/GlobalState';
import VideoPopup from '@/shared/VideoPopup';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GlobalProvider>
    <Component {...pageProps} />
    <VideoPopup />
  </GlobalProvider>
);

export default MyApp;
