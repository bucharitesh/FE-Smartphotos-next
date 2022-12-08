'use client';

import Button from '@/shared/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  [
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-1.webp',
      comment:
        'Our customers have experienced the magical video prints and never looked back ever since!',
    },
    {
      name: 'Amelie',
      username: 'AmelieStrom',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment:
        "Sent our son's birthday SmartPhoto to grandma. She was as happy as I'd ever seen her!",
    },
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-1.webp',
      comment: 'This reminds me of Harry Potter! So Magical!',
    },
  ],
  [
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-3.webp',
      comment: 'Magical!',
    },
    {
      name: 'Lauren Will',
      username: 'willlau',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-1.webp',
      comment:
        'Getting my first SmartPhoto was so exciting! The AR experience along with the video was a nice touch!',
    },
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-4.webp',
      comment: 'Received this as a gift and never expected it to be so amazing!',
    },
  ],
  [
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment:
        "It's so lovely to have my Graduation Day preserved in this SmartPhoto with Photo & Video!",
    },
    {
      name: 'Amelie',
      username: 'AmelieStrom',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-3.webp',
      comment: "I'm in love with this!",
    },
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment: 'My wife loved this! I made a SmartPhoto of our wedding and it was priceless!',
    },
  ],
  [
    {
      name: 'Lauren Will',
      username: 'willlau',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-3.webp',
      comment:
        ' I can never go back to normal photos again! The SmartPhotos experience has been so exciting!',
    },
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-4.webp',
      comment: 'This has made my holiday gifting so easy!',
    },
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment: 'Magical!',
    },
  ],
];

const Testimonials = () => {
  return (
    <div className="h-full px-6 py-20 lg:min-h-[60rem] lg:px-[10%]">
      <div className="mb-10 flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -40, y: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          
          className="bg-gradient-to-r from-brand_blue_4 to-brand_blue_5 bg-clip-text text-6xl font-black text-transparent lg:text-7xl"
        >
          Over 1 Million Memories, Re-Lived!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -40, y: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0, 
            transition: {
              duration: 1,
            },
          }}
          
          className="w-full text-xl font-medium text-brand_gray_2 lg:w-1/2 lg:text-2xl"
        >
          Our customers have experienced the magical video prints and never looked back ever since!
        </motion.p>
      </div>
      <div className="relative py-10 px-4 md:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, i) => {
            return (
              <div key={`item_${i}`} className="flex w-full flex-col gap-6">
                {item.map((subItem, ind) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -40, y: 40 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                          duration: 1,
                        },
                      }}
                      
                      key={`subItem_${ind}`}
                      className={`h-min w-full rounded-3xl bg-brand_white p-6 shadow-xl `}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image src={subItem.avatar_url} alt={subItem.username} fill />
                        </div>
                        <div>
                          <p className="text-md font-black text-brand_black">{subItem.name}</p>
                          <p className="text-sm text-brand_gray_6">@{subItem.username}</p>
                        </div>
                      </div>
                      <p className="text-brand_black">{subItem.comment}</p>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="block md:hidden">
          <Button className="mt-10 w-full border border-brand_blue_1 bg-brand_white text-brand_blue_1 shadow-md shadow-brand_blue_1">
            Load more
          </Button>
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-b from-brand_white via-transparent to-brand_white lg:block "></div>
      </div>
    </div>
  );
};

export default Testimonials;
