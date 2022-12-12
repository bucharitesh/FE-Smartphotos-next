import Main from '@/layouts/Main';
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
    <Main title='' description=''>
      <Suspense fallback={null}>
        <Hero />
        <Showcase />
        <Testimonials />
        <Explore />
      </Suspense>
    </Main>
  );
};

export default Page;
