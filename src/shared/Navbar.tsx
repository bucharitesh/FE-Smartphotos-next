import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

const Navbar = ({ grayBg = false }: { grayBg?: boolean }) => {
  return (
    <nav
      className={`flex items-center justify-center px-[10%] py-6 md:justify-between ${
        grayBg ? 'bg-brand_gray_1' : 'bg-brand_white'
      }`}
    >
      <Link href="/" className="relative h-12 w-40">
        <Image src="/assets/common/sm-logo-blue.svg" alt="smatphotos" fill />
      </Link>
      <Button
        onClick={() => {
          window.open('https://onelink.to/smartphotos');
        }}
        className="hidden md:block"
      >
        Download App
      </Button>
    </nav>
  );
};

export default Navbar;
