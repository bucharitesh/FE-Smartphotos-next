import Image from 'next/image';
import Button from './Button';

const Navbar = ({grayBg = false}: {grayBg?: boolean}) => {
  return (
    <nav className={`flex items-center justify-between px-[10%] py-6 ${grayBg ? "bg-brand_gray_1" : "bg-brand_white"}`}>
      <div className="relative h-12 w-40">
        <Image
          src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/sm-logo-blue.svg"
          alt="smatphotos"
          fill
        />
      </div>
      <Button>Download App</Button>
    </nav>
  );
};

export default Navbar;
