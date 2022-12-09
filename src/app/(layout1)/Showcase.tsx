'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Showcase = () => {
  return (
    <div
      className="h-auto w-screen gap-4 bg-brand_gray_1 px-6 py-20 lg:grid lg:h-[70rem] lg:grid-rows-2 lg:px-[10%]"
    >
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
        className="mb-6 grid h-[50rem] w-full grid-rows-2 gap-10 overflow-hidden rounded-3xl bg-brand_black text-brand_white lg:h-full lg:grid-cols-2 lg:grid-rows-1 "
      >
        <div className="order-2 flex h-full w-full flex-col items-center justify-center p-6 lg:order-1 lg:p-10">
          <h2 className="mb-8 w-full self-start text-center text-4xl font-black lg:w-5/6 lg:text-left lg:text-5xl">
            Give Your Photos An Upgrade!
          </h2>
          <p className="text-center text-lg text-brand_gray_1 lg:text-left lg:text-xl">
            Express your heart out with moving pictures that celebrate your memories and milestones
            just the way you remember it!
          </p>
        </div>
        <div className="order-1 grid grid-cols-3 gap-3 overflow-hidden lg:order-2">
          <motion.div
            initial={{
              y: 0,
            }}
            whileInView={{ y: '-41%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
              repeatDelay: 2,
            }}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col gap-3"
          >
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
          </motion.div>
          <motion.div
            initial={{
              y: '-22%',
            }}
            whileInView={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
              repeatDelay: 2,
            }}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col gap-3"
          >
            <div className="relative h-36 w-full ">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-2.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-36 w-full">
              <video muted loop autoPlay playsInline className="h-full w-full object-cover">
                <source
                  src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-vid-2.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="relative h-36 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-3.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-36 w-full">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-img-4.webp"
                alt="show-1"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: '0',
            }}
            whileInView={{ y: '-24%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
              repeatDelay: 2,
            }}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col gap-3"
          >
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
          </motion.div>
        </div>
      </motion.div>
      <div className="grid h-full w-full grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y:0,
            transition: {
              duration: 0.7,
            },
          }}
          viewport={{ once: true }}
          className="flex flex-col-reverse gap-3 overflow-hidden rounded-3xl bg-gradient-to-br from-brand_pink_1 to-brand_blue_3 text-brand_white shadow-xl lg:flex-row"
        >
          <div className="flex flex-col justify-center p-6 lg:p-10">
            <h2 className="mb-8 text-center text-4xl font-black lg:text-left lg:text-5xl">
              Create
            </h2>
            <p className="text-center text-lg font-medium text-brand_gray_1 lg:text-left lg:text-xl">
              Upload a Video to the SmartPhotos App, choose a cover and your SmartPhoto is ready!
            </p>
          </div>
          <img
            src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-create.png"
            alt="create"
            className="h-full w-auto px-6 pb-6 lg:pr-6 lg:pl-0"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
            },
          }}
          viewport={{ once: true }}
          className="flex flex-col-reverse gap-3 overflow-hidden rounded-3xl bg-white shadow-xl lg:flex-row"
        >
          <div className="flex flex-col justify-center p-6 lg:p-10">
            <h2 className="mb-8 text-center text-4xl font-black lg:text-left lg:text-5xl">Scan</h2>
            <p className="text-center text-lg font-medium text-brand_gray_2 lg:text-left lg:text-xl">
              Scan your SmartPhoto and watch your precious moments come alive!
            </p>
          </div>
          <img
            src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/showcase/sm-showcase-scan.png"
            alt="scan"
            className="h-full w-auto px-6 pt-6 lg:pr-6 lg:pl-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
