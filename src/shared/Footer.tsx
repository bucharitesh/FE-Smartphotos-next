import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand_black px-6 py-20 lg:px-[10%]">
      <div className="flex w-full flex-col items-stretch justify-between border-b-0 border-brand_gray_4 pb-6 md:flex-row md:items-center md:border-b">
        <div className="relative h-10 w-40 cursor-pointer">
          <Image
            src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/sm-logo-white.svg"
            alt="smartphoto"
            fill
          />
        </div>
        <ul className="my-6 flex flex-col items-start justify-between gap-4 border-t border-brand_gray_4 pt-6 font-bold text-brand_white md:my-0 md:flex-row md:items-center md:border-0 md:pt-0">
          <li>Work With Us </li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex items-center gap-8">
          <div className="relative h-10 w-20 cursor-pointer">
            <Image
              src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/flam-logo-white.svg"
              alt="flam"
              fill
            />
          </div>
          <div className="relative mt-3 h-10 w-28 cursor-pointer">
            <Image
              src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/zingcam-logo-white.svg"
              alt="zingcam by flam"
              fill
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-6 md:flex-row md:items-center'>
        <p className='mt-6  border-t border-brand_gray_4 pt-6 text-brand_gray_5 md:mt-0 md:border-t-0 md:pt-0'>Copyright © 2022 Flam | All Rights Reserved</p>
        <ul className='flex items-center gap-5'>
          <li>
            <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/discord-logo.svg"
                alt="discord"
                fill
              />
            </div>
          </li>
          <li>
            <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/yt-logo.svg"
                alt="youtube"
                fill
              />
            </div>
          </li>
          <li>
            <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/twitter-logo.svg"
                alt="twitter"
                fill
              />
            </div>
          </li>
          <li>
            <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/ig-logo.svg"
                alt="instagram"
                fill
              />
            </div>
          </li>
          <li>
            <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/linkedin-logo.svg"
                alt="linkedin"
                fill
              />
            </div>
          </li>
          <li>
            <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/reddit-logo.svg"
                alt="reddit"
                fill
              />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
