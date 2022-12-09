'use client';

import { Main } from '@/templates/Main';
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);

  const options = {
    smooth: true,
    multiplier: 1,
  }; 

  return (
    <Main title="" description="">
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </Main>
  );
}
