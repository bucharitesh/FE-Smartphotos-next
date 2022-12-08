"use client";

import { Main } from '@/templates/Main';
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';
import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { useLayoutEffect, useRef } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const el = useRef(null);
  // const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,
    });
    return () => {
      smoother.kill();
    };
  }, []);

  
  return (
    <Main title="" description="">
      <div ref={el} id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </Main>
  );
}
