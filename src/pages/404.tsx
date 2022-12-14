import RootLayout from '@/layouts/Layout1';
import Main from '@/templates/Main';
import Image from 'next/image';

const Page = () => {
  return (
    <Main
      title="Print Videos on Paper with Awesome AR Effects | SmartPhotos"
      description="Print your photos with SmartPhotos and turn into videos with great AR effects."
    >
      <RootLayout>
        <div className="flex h-[65vh] flex-col items-center justify-center">
          <div className="relative h-60 w-60">
            <Image
              src="/assets/notfound/wifi_error.webp"
              alt="page not found"
              fill
              className="object-fit"
            />
          </div>
          <h2 className="font-gilroy text-3xl font-bold">Oops !</h2>
          <p className="font-manrope text-lg font-medium text-brand_gray_2">Something went wrong</p>
        </div>
      </RootLayout>
    </Main>
  );
};

export default Page;
