'use client';

import Button from '@/shared/Button';
import { useEffect, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const videoList = [1, 2, 3, 4, 5];

const Hero = () => {
  const [randomVideoList, setRandomVideoList] = useState(videoList);

  function shuffle(array: number[]) {
    const arr = [...array];
    let currentIndex = array.length;
      let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex-=1;

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
    <main className="flex h-[55rem] w-screen flex-col items-center justify-between bg-white px-[10%] pt-16 pb-36">
      <div className="mb-14 flex flex-col items-center text-center">
        <h1 className="text-7xl font-black text-brand_blue_2">Make Memories Come Alive!</h1>
        <p className="my-6 text-xl font-medium text-brand_gray_2">
          Re-live your memories in Video Prints with extraordinary AR Experiences!
        </p>
        <div className="flex items-center gap-10">
          <Button className="py-3">Download App</Button>
          <div className="flex items-center gap-2">
            <AiFillPlayCircle className="h-10 w-10 text-brand_yellow_1" />
            <p className="text-sm font-semibold text-brand_gray_3">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="h-40 w-48 overflow-hidden rounded-3xl bg-gray-200">
          <video key={randomVideoList[0]} muted loop autoPlay playsInline className="h-full w-full object-cover">
            <source
              src={`https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/hero/sm-landing-hero-${randomVideoList[0]}.webm`}
              type="video/webm"
            />
          </video>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div className="h-24 w-48 overflow-hidden rounded-3xl bg-[#D1FAE5]"></div>
          <div className="h-40 w-48 overflow-hidden rounded-3xl bg-gray-200">
            <video key={randomVideoList[1]} muted loop autoPlay playsInline className="h-full w-full object-cover">
              <source
                src={`https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/hero/sm-landing-hero-${randomVideoList[1]}.webm`}
                type="video/webm"
              />
            </video>
          </div>
        </div>

        <div className="h-96 w-48 overflow-hidden rounded-3xl bg-gray-200">
          <video key={randomVideoList[2]} muted loop autoPlay playsInline className="h-full w-full object-cover">
            <source
              src={`https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/hero/sm-landing-hero-${randomVideoList[2]}.webm`}
              type="video/webm"
            />
          </video>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div className="h-40 w-48 overflow-hidden rounded-3xl bg-gray-200">
            <video key={randomVideoList[3]} muted loop autoPlay playsInline className="h-full w-full object-cover">
              <source
                src={`https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/hero/sm-landing-hero-${randomVideoList[3]}.webm`}
                type="video/webm"
              />
            </video>
          </div>
          <div className="h-24 w-48 overflow-hidden rounded-3xl bg-[#FEF3C7]"></div>
        </div>

        <div className="h-40 w-48 overflow-hidden rounded-3xl bg-gray-200">
          <video key={randomVideoList[4]} muted loop autoPlay playsInline className="h-full w-full object-cover">
            <source
              src={`https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/hero/sm-landing-hero-${randomVideoList[4]}.webm`}
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </main>
  );
};

export default Hero;
