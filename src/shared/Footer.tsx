import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand_black px-6 py-20 lg:px-[10%]">
      <div className="flex w-full flex-col items-stretch justify-between border-b-0 border-brand_gray_4 pb-6 md:flex-row md:items-center md:border-b">
        <Link href="/" className="relative h-10 w-40 cursor-pointer">
          <Image src="/assets/common/sm-logo-white.svg" alt="smartphoto" fill />
        </Link>
        <ul className="my-6 flex flex-col items-start justify-between gap-4 border-t border-brand_gray_4 pt-6 font-bold text-brand_white md:my-0 md:flex-row md:items-center md:border-0 md:pt-0">
          <a href="https://flamapp.com/careers" target="_blank" rel="noreferrer">
            Work With Us
          </a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:contact@flamapp.com">Contact Us</a>
        </ul>
        <div className="flex items-center gap-8">
          <a
            href="https://flamapp.com/"
            target="_blank"
            rel="noreferrer"
            className="relative h-10 w-20 cursor-pointer"
          >
            <Image src="/assets/common/flam-logo-white.svg" alt="flam" fill />
          </a>
          <a
            href="https://zingcam.tech/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-3 h-10 w-28 cursor-pointer"
          >
            <Image src="/assets/common/zingcam-logo-white.svg" alt="zingcam by flam" fill />
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-6 md:flex-row md:items-center">
        <p className="mt-6  border-t border-brand_gray_4 pt-6 text-brand_gray_5 md:mt-0 md:border-t-0 md:pt-0">
          Copyright © 2022 Flam | All Rights Reserved
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/vAdms5T3nq">
              <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
                <Image src="/assets/common/discord-logo.svg" alt="discord" fill />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/FlamAppOfficial">
              <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
                <Image src="/assets/common/yt-logo.svg" alt="youtube" fill />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/flamappofficial">
              <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
                <Image src="/assets/common/twitter-logo.svg" alt="twitter" fill />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/flamappofficial/">
              <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
                <Image src="/assets/common/ig-logo.svg" alt="instagram" fill />
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/flamappofficial/"
            >
              <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
                <Image src="/assets/common/linkedin-logo.svg" alt="linkedin" fill />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/FlamApp/">
              <div className="relative h-6 w-6 cursor-pointer md:h-4 md:w-4">
                <Image src="/assets/common/reddit-logo.svg" alt="reddit" fill />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
