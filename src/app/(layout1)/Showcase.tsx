import Image from 'next/image';

const Showcase = () => {
  return (
    <div className="grid h-[70rem] w-screen grid-rows-2 gap-4  bg-brand_gray_1 px-[10%] py-20">
      <div className="mb-6 grid w-full grid-cols-2 gap-10 overflow-hidden rounded-3xl bg-brand_black text-brand_white">
        <div className="flex h-full w-full flex-col items-center justify-center p-10">
          <h2 className="mb-8 w-5/6 self-start text-5xl font-black">Give Your Photos An Upgrade!</h2>
          <p className="text-xl text-brand_gray_1">
            Express your heart out with moving pictures that celebrate your memories and milestones
            just the way you remember it!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 overflow-hidden">
          <div className="flex h-full w-full flex-col gap-3">
            <div className="relative h-72 w-full">
              <video muted loop autoPlay playsInline className="h-full w-full object-cover">
                <source
                  src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-vid-1.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="relative h-40 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-1.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-3.webp"
                alt="show-3"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-3">
            <div className="relative h-40 w-full ">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-2.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full">
              <video muted loop autoPlay playsInline className="h-full w-full object-cover">
                <source
                  src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-vid-2.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="relative h-40 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-3.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-4.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-3">
            <div className="relative h-40 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-5.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-6.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-7.webp"
                alt="show-1"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-2 gap-10">
        <div className="flex gap-3 overflow-hidden rounded-3xl bg-gradient-to-br from-brand_pink_1 to-brand_blue_3 text-brand_white shadow-xl">
          <div className="flex flex-col justify-center p-10">
            <h2 className="mb-8 text-5xl font-black">Create</h2>
            <p className="text-xl font-medium text-brand_gray_1">
              Upload a Video to the SmartPhotos App, choose a cover and your SmartPhoto is ready!
            </p>
          </div>
          <img
            src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-create.png"
            alt="create"
            className="h-full w-auto pr-6 pb-6"
          />
        </div>
        <div className="flex gap-3 overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="flex flex-col justify-center p-10">
            <h2 className="mb-8 text-5xl font-black">Scan</h2>
            <p className="text-xl font-medium text-brand_gray_2">
              Scan your SmartPhoto and watch your precious moments come alive!
            </p>
          </div>
          <img
            src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-scan.png"
            alt="scan"
            className='h-full w-auto pr-6 pt-6'
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
