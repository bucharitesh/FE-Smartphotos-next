import Button from '@/shared/Button';

const data = [
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_1.webm',
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_2.webm',
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_3.webm',
  'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/explore/sm_explore_vid_4.webm',
];

const Video = ({ vidUrl }: { vidUrl: string }) => {
  return (
    <div className='h-full w-full overflow-hidden rounded-3xl'>
      <video key={vidUrl} autoPlay muted loop playsInline className="h-full w-full object-cover">
        <source src={vidUrl} type="video/webm" />
      </video>
    </div>
  );
};

const Explore = () => {
  return (
    <div className="flex h-[55rem] flex-col justify-between bg-brand_black px-[10%] py-20 text-brand_white">
      <div className='mb-14 flex flex-col items-center gap-5 text-center'>
        <h2 className='bg-gradient-to-r from-brand_blue_4 to-brand_blue_5 bg-clip-text text-7xl font-black text-transparent'>Little Moments, Big Memories!</h2>
        <p className='w-1/2 text-2xl font-medium text-brand_gray_1'>Explore how SmartPhotos brings memories alive with extraordinary experiences!</p>
        <Button>Download App</Button>
      </div>
      <div className='grid h-96 grid-cols-4 gap-6'>
        {data.map((item) => {
          return <Video key={item} vidUrl={item} />;
        })}
      </div>
    </div>
  );
};

export default Explore;


