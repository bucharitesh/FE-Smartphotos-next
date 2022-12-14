import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Layout1 from '@/layouts/Layout1';
import Main from '../templates/Main';

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
    <Main
      title="Print Videos on Paper with Awesome AR Effects | SmartPhotos"
      description="Print your photos with SmartPhotos and turn into videos with great AR effects."
      keywords="video printing, AR photos, AR cards, Magic photos"
    >
      <Suspense fallback={null}>
        <Layout1>
          <Hero />
          <Showcase />
          <Testimonials />
          <Explore />
        </Layout1>
      </Suspense>
    </Main>
  );
};

export default Page;
