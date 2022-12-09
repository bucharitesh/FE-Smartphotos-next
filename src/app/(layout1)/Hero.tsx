'use client';

import Button from '@/shared/Button';
import { useContext, useEffect, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobalContext } from '@/context/GlobalState';

const videoList = [1, 2, 3, 4, 5];

const Hero = () => {
  const [randomVideoList, setRandomVideoList] = useState(videoList);
  const { setVideoPlaying }: any = useContext(GlobalContext);

  function shuffle(array: number[]) {
    const arr = [...array];
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [(arr as any)[currentIndex], (arr as any)[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomVideoList(shuffle(randomVideoList));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-screen flex-col items-center justify-between bg-white px-6 pt-16 pb-36 md:h-[55rem] md:px-[10%]">
      <motion.div
        className="mb-14 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        viewport={{ once: true }}
      >
        <h1 className="text-7xl font-black text-brand_blue_2">Make Memories Come Alive!</h1>
        <p className="my-6 text-xl font-medium text-brand_gray_2">
          Re-live your memories in Video Prints with extraordinary AR Experiences!
        </p>
        <div className="flex flex-col items-center gap-6 sm:flex-row md:gap-10">
          <Button className="py-3">Download App</Button>
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() =>
              setVideoPlaying(
                '/assets/landing/explore/sm_explore_vid_1.webm'
              )
            }
          >
            <AiFillPlayCircle className="h-10 w-10 text-brand_yellow_1" />
            <p className="text-sm font-semibold text-brand_gray_3">Play Demo</p>
          </div>
        </div>
      </motion.div>
      <div className="flex w-full items-center justify-between gap-2 sm:justify-center sm:gap-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1,
              ease: 'easeOut',
            },
          }}
          viewport={{ once: true }}
          className="hidden h-40 w-52 overflow-hidden rounded-3xl bg-gray-200 lg:block"
        >
          <AnimatePresence mode="wait">
            <motion.video
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
              key={randomVideoList[0]}
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src={`/assets/landing/hero/sm-landing-hero-${randomVideoList[0]}.webm`}
                type="video/webm"
              />
            </motion.video>
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col justify-center gap-2 sm:gap-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="h-10 w-[25vw] overflow-hidden rounded-3xl bg-[#D1FAE5] sm:h-24 sm:w-40 lg:w-52"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="h-20 w-[25vw] overflow-hidden rounded-3xl bg-gray-200 sm:h-40 sm:w-40 lg:w-52"
          >
            <AnimatePresence mode="wait">
              <motion.video
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0 }}
                key={randomVideoList[1]}
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              >
                <source
                  src={`/assets/landing/hero/sm-landing-hero-${randomVideoList[1]}.webm`}
                  type="video/webm"
                />
              </motion.video>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1,
              ease: 'easeOut',
            },
          }}
          viewport={{ once: true }}
          className="h-48 w-[26vw] overflow-hidden rounded-3xl bg-gray-200 sm:h-96 sm:w-40 lg:w-52"
        >
          <AnimatePresence mode="wait">
            <motion.video
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
              viewport={{ once: true }}
              key={randomVideoList[2]}
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src={`/assets/landing/hero/sm-landing-hero-${randomVideoList[2]}.webm`}
                type="video/webm"
              />
            </motion.video>
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col justify-center gap-2 sm:gap-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="h-20 w-[25vw] overflow-hidden rounded-3xl bg-gray-200  sm:h-40 sm:w-40 lg:w-52"
          >
            <AnimatePresence mode="wait">
              <motion.video
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0 }}
                key={randomVideoList[3]}
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              >
                <source
                  src={`/assets/landing/hero/sm-landing-hero-${randomVideoList[3]}.webm`}
                  type="video/webm"
                />
              </motion.video>
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="h-10 w-[25vw] overflow-hidden rounded-3xl bg-[#FEF3C7] sm:h-24 sm:w-40 lg:w-52"
          ></motion.div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1,
              ease: 'easeOut',
            },
          }}
          viewport={{ once: true }}
          className="hidden h-40 w-52 overflow-hidden rounded-3xl bg-gray-200 lg:block"
        >
          <AnimatePresence mode="wait">
            <motion.video
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
              key={randomVideoList[4]}
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src={`/assets/landing/hero/sm-landing-hero-${randomVideoList[4]}.webm`}
                type="video/webm"
              />
            </motion.video>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
