import { Main } from '@/templates/Main';
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';
import { useRef } from 'react';
import VideoPopup from '@/shared/VideoPopup';
import { GlobalProvider } from '@/context/GlobalState';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  
  return (
    <GlobalProvider>
      <Main title="" description="">
        <main data-scroll-container ref={ref}>
          <Navbar />
          {children}
          <Footer />
        </main>
        <VideoPopup />
      </Main>
    </GlobalProvider>
  );
}
