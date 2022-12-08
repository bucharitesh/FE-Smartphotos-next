'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar = ({ grayBg = false }: { grayBg?: boolean }) => {
  return (
    <motion.nav
      className={`flex items-center justify-center px-[10%] py-6 md:justify-between ${
        grayBg ? 'bg-brand_gray_1' : 'bg-brand_white'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <div className="relative h-12 w-40">
        <Image
          src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/sm-logo-blue.svg"
          alt="smatphotos"
          fill
        />
      </div>
      <Button className='hidden md:block'>Download App</Button>
    </motion.nav>
  );
};

export default Navbar;
