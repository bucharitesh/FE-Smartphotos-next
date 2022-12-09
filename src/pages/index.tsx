import RootLayout from '@/layouts/layout';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('../shared/landing/Hero'), {
  suspense: true,
});


const Explore = dynamic(() => import('../shared/landing/Explore'), {
  suspense: true,
});



const Showcase = dynamic(() => import('../shared/landing/Showcase'), {
  suspense: true,
});


const Testimonials = dynamic(() => import('../shared/landing/Testimonials'), {
  suspense: true,
});


const Page = () => {
  return (
    <RootLayout>
      <Suspense fallback={null}>
        <Hero />
        <Showcase />
        <Testimonials />
        <Explore />
      </Suspense>
    </RootLayout>
  );
};

export default Page;
