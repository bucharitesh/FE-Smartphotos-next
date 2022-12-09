'use client';

import { GlobalContext } from '@/context/GlobalState';
import Button from '@/shared/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

// const data = [
//   '/assets/landing/explore/sm_explore_vid_1.webm',
//   '/assets/landing/explore/sm_explore_vid_2.webm',
//   '/assets/landing/explore/sm_explore_vid_3.webm',
//   '/assets/landing/explore/sm_explore_vid_4.webm',
// ];

const posters = [
  {
    id: '1',
    img: '/assets/landing/explore/explore_1.webp',
    vid: '/assets/landing/explore/sm_explore_vid_1.webm',
  },
  {
    id: '2',
    img: '/assets/landing/explore/explore_2.webp',
    vid: '/assets/landing/explore/sm_explore_vid_2.webm',
  },
  {
    id: '3',
    img: '/assets/landing/explore/explore_1.webp',
    vid: '/assets/landing/explore/sm_explore_vid_3.webm',
  },
  {
    id: '4',
    img: '/assets/landing/explore/explore_2.webp',
    vid: '/assets/landing/explore/sm_explore_vid_4.webm',
  },
];

const Explore = () => {
  const { setVideoPlaying }: any = useContext(GlobalContext);

  return (
    <div className="flex flex-col justify-between bg-brand_black px-6 py-20 text-brand_white lg:min-h-[55rem] lg:px-[10%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col items-center gap-5 text-center"
      >
        <h2 className="bg-gradient-to-r from-brand_blue_4 to-brand_blue_5 bg-clip-text text-6xl font-black text-transparent lg:text-7xl">
          Little Moments, Big Memories!
        </h2>
        <p className="w-full text-xl font-medium text-brand_gray_1 md:w-1/2 lg:text-2xl">
          Explore how SmartPhotos brings memories alive with extraordinary experiences!
        </p>
        <Button>Download App</Button>
      </motion.div>
      <div className="flex w-full gap-8 overflow-x-auto lg:grid lg:h-96 lg:grid-cols-4 lg:overflow-x-hidden">
        {posters.map((item) => {
          return (
            <div
              key={item.id}
              className="relative h-96 w-full min-w-[20rem] cursor-pointer overflow-hidden rounded-3xl lg:min-w-0"
              onClick={() => setVideoPlaying(item.vid)}
            >
              <Image src={item.img} alt="Explore" fill className="h-full w-full object-cover" />
              <div className="absolute inset-0 h-full w-full bg-black/50"></div>
              <AiFillPlayCircle className="absolute inset-0 m-auto h-10 w-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
