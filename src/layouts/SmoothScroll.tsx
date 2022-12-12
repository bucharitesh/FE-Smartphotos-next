import React, { useEffect, useRef } from 'react';

import { useWindowSize } from '@/utils/hooks';

const SmoothScroll = ({ children } : any) => {
  // 1.
  const windowSize = useWindowSize();

  // 2.
  const scrollingContainerRef = useRef<any>();

  // 3.
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    if (scrollingContainerRef)
      document.body.style.height = `${
        scrollingContainerRef?.current?.getBoundingClientRect()?.height
      }px`;
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  
  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef)
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
