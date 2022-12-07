import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand_black px-[10%] py-20">
      <div className="w-full flex justify-between items-center pb-6 border-b border-brand_gray_4">
        <div className="h-10 w-40 relative cursor-pointer">
          <Image
            src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/sm-logo-white.svg"
            alt="smartphoto"
            fill
          />
        </div>
        <ul className="text-brand_white flex gap-4 justify-between items-center">
          <li>Work With Us </li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex gap-8 items-center">
          <div className="h-10 w-20 relative cursor-pointer">
            <Image
              src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/flam-logo-white.svg"
              alt="flam"
              fill
            />
          </div>
          <div className="h-10 w-28 relative cursor-pointer">
            <Image
              src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/zingcam-logo-white.svg"
              alt="zingcam by flam"
              fill
            />
          </div>
        </div>
      </div>
      <div className='pt-6 flex justify-between items-center'>
        <p className='text-brand_gray_5'>Copyright © 2022 Flam | All Rights Reserved</p>
        <ul className='flex gap-5 items-center'>
          <li>
            <div className="h-4 w-4 relative cursor-pointer">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/discord-logo.svg"
                alt="discord"
                fill
              />
            </div>
          </li>
          <li>
            <div className="h-4 w-4 relative cursor-pointer">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/yt-logo.svg"
                alt="youtube"
                fill
              />
            </div>
          </li>
          <li>
            <div className="h-4 w-4 relative cursor-pointer">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/twitter-logo.svg"
                alt="twitter"
                fill
              />
            </div>
          </li>
          <li>
            <div className="h-4 w-4 relative cursor-pointer">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/ig-logo.svg"
                alt="instagram"
                fill
              />
            </div>
          </li>
          <li>
            <div className="h-4 w-4 relative cursor-pointer">
              <Image
                src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/linkedin-logo.svg"
                alt="linkedin"
                fill
              />
            </div>
          </li>
          <li>
            <div className="h-4 w-4 relative cursor-pointer">
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
