import Button from '@/shared/Button';

const data = [
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_1.webm',
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_2.webm',
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_3.webm',
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_4.webm',
];

const Video = ({ vidUrl }: { vidUrl: string }) => {
  return (
    <div className='h-96 w-full min-w-[20rem] overflow-hidden rounded-3xl lg:min-w-0'>
      <video key={vidUrl} autoPlay muted loop playsInline className="h-full w-full object-cover">
        <source src={vidUrl} type="video/webm" />
      </video>
    </div>
  );
};

const Explore = () => {
  return (
    <div className="flex flex-col justify-between bg-brand_black px-6 py-20 text-brand_white lg:min-h-[55rem] lg:px-[10%]">
      <div className='mb-14 flex flex-col items-center gap-5 text-center'>
        <h2 className='bg-gradient-to-r from-brand_blue_4 to-brand_blue_5 bg-clip-text text-6xl font-black text-transparent lg:text-7xl'>Little Moments, Big Memories!</h2>
        <p className='w-full text-xl font-medium text-brand_gray_1 md:w-1/2 lg:text-2xl'>Explore how SmartPhotos brings memories alive with extraordinary experiences!</p>
        <Button>Download App</Button>
      </div>
      <div className='flex w-full gap-8 overflow-x-auto lg:grid lg:h-96 lg:grid-cols-4 lg:overflow-x-hidden'>
        {data.map((item) => {
          return <Video key={item} vidUrl={item} />;
        })}
      </div>
    </div>
  );
};

export default Explore;


